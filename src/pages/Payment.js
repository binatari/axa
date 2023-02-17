import React from "react";
import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Label,
  Input,
  Select,
} from "@windmill/react-ui";
import { useState } from "react";
import { api } from "../utils/queries";
import { toast } from "react-toastify";
const Payment = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    amount: 0,
    method: "gift card",
    is_verified: false,
    voucher_code: "",
    voucher_type: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    if (e.target.name == "method") {
      setPaymentInfo({
        ...{
          amount: 0,
          is_verified: false,
          voucher_code: "",
          voucher_type: "",
        },
        [e.target.name]: e.target.value,
      });
      return;
    }
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const initiatePayment = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("data", JSON.stringify({ ...paymentInfo }));

    if (files.length) {
      Array.from(files).forEach((file) => {
        formData.append(`files.receipt`, file, file.name);
      });
    }
    await api
      .post("/donations", formData)
      .then((res) => {
        toast("Desposit made");
        return res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const handleFile = (e) => {
    setFiles(e.target.files);
  };

  return (
    <div>
      <PageTitle>Payments</PageTitle>
      <SectionTitle>Gift Card payments</SectionTitle>

      <div className="px-4 py-3 mb-8 bg-white rounded-lg mx-auto shadow-md max-w-3xl dark:bg-gray-800">
        Please specify the amount to be deposited and provide proof of payment
        if available{" "}
        {/* {paymentInfo.method == "usd"
            ? "and pay into the address below before confirming payment"
            : null}
          <Label className="mt-4">
            <span>Mode of Payment</span>
            <Select
              placeholder="Select mode of payment"
              onChange={onChange}
              value={paymentInfo.method}
              name="method"
              className="mt-1 border rounded-sm"
            >
              <option></option>
              <option>usd</option>
              <option>gift card</option>
            </Select>
          </Label> */}
        {paymentInfo.method ? (
          <>
            {paymentInfo.method == "gift card" ? (
              <>
                <p className=" text-sm mt-4 text-center">
                  Please select your gift card type by clicking one of the cards
                  below
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4 ">
                  <div
                    className={`flex justify-center max-h-20 p-4 cursor-pointer 
                        ${
                          paymentInfo.voucher_type == "play store"
                            ? "bg-red"
                            : ""
                        }`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setPaymentInfo({
                        ...paymentInfo,
                        voucher_type: "play store",
                      })
                    }
                  >
                    <img
                      src="/img/play-store.jpg"
                      className="h-full rounded-sm"
                    />
                  </div>
                  <div
                    className={`flex justify-center max-h-20 p-4 cursor-pointer 
                    ${paymentInfo.voucher_type == "steam" ? "bg-red" : ""}`}
                    onClick={() =>
                      setPaymentInfo({
                        ...paymentInfo,
                        voucher_type: "steam",
                      })
                    }
                  >
                    <img src="/img/steam.png" className="h-full rounded-sm" />
                  </div>
                  <div
                    className={`flex justify-center max-h-20 p-4 cursor-pointer 
                    ${
                      paymentInfo.voucher_type == "american express"
                        ? "bg-red"
                        : ""
                    }`}
                    onClick={() =>
                      setPaymentInfo({
                        ...paymentInfo,
                        voucher_type: "american express",
                      })
                    }
                  >
                    <img src="/img/express.png" className="h-full rounded-sm" />
                  </div>
                </div>
              </>
            ) : null}

            {paymentInfo.method == "gift card" && paymentInfo.voucher_type ? (
              <>
                <Label className="mt-4">
                  <span>Amount</span>
                  <Input
                    className="mt-1"
                    type="number"
                    onChange={onChange}
                    name="amount"
                    placeholder="$100"
                  />
                </Label>

                <Label className="mt-4">
                  <span>Voucher code</span>
                  <Input
                    className="mt-1"
                    type="text"
                    onChange={onChange}
                    name="voucher_code"
                    placeholder="hajhd-3dqdh-nuj3-ssqu3"
                  />
                </Label>
                {/* <p className="text-lg my-4 font-semibold"> Upload images</p> */}
                <p className=" my-4 font-semibold">
                  Upload payment proof if available
                </p>
                <Button layout="outline">
                  <input
                    type="file"
                    name="receipt"
                    className=""
                    onChange={handleFile}
                    multiple
                  />
                </Button>
              </>
            ) : null}
          </>
        ) : null}
        <div className="block mt-5">
        <Button disabled={loading || !paymentInfo.voucher_type || !paymentInfo.voucher_code || !paymentInfo.amount }  onClick={initiatePayment}>
          {loading ? "Loading" : "Confirm payment"}
        </Button>
        </div>
      
      </div>
    </div>
  );
};

export default Payment;
