import React from "react";
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
import { api } from "../../utils/queries";
import { toast } from "react-toastify";

const PaymentModal = ({ cb, address, network }) => {
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    amount: 0,
    method: "",
    is_verified: false,
    voucher_code: "",
    voucher_type: "",
  });
  const [files, setFiles] = useState([]);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const onChange = (e) => {
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
        cb();
        setTimeout(closeModal, 1000);
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
      <div>
        <Button onClick={openModal}>Add Funds</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Make Deposit</ModalHeader>
        <ModalBody>
          Please specify the amount to be deposited and provide proof of payment
          if available{" "}
          {paymentInfo.method == "usd"
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
              <option>gift card </option>
            </Select>
          </Label>
          {paymentInfo.method ? (
            <>
              {paymentInfo.method == "usd" ? (
                <>
                  <p className=" text-sm mt-4 ">Wallet address</p>
                  <p className=" text-lg mt-2 font-bold">{address}</p>
                  <p className=" text-sm mt-4 ">Network</p>
                  <p className=" text-lg mt-2 font-bold">{network}</p>
                </>
              ) : null}
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
              {paymentInfo.method == "gift card" ? (
                <>
                  <Label className="mt-4">
                    <span>Voucher type</span>
                    <Select
                      placeholder="Select gift card type"
                      onChange={onChange}
                      name="voucher_type"
                      className="mt-1 border rounded-sm"
                    >
                      <option></option>
                      <option>Steam</option>
                      <option>American Express</option>
                      <option>Google Play</option>
                    </Select>
                  </Label>
                  <Label className="mt-4">
                    <span>Voucher code</span>
                    <Input
                      className="mt-1"
                      type="text"
                      onChange={onChange}
                      name="voucher_code"
                      placeholder="axasj-u3i23-sjai8-snc3s"
                    />
                  </Label>
                </>
              ) : null}

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
        </ModalBody>
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button onClick={initiatePayment}>
              {loading ? "Loading" : "Confirm payment"}
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button onClick={initiatePayment} block size="large">
              {loading ? "Loading" : "Confirm payment"}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PaymentModal;
