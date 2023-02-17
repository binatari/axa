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

import React from "react";
import { useState } from "react";
import { api } from "../../utils/queries";
import { toast } from "react-toastify";


var country_list = [
    "",
   "residential",
   "industrial",
   "commercial"
    ];
const WithDrawInvestment = ({ cb, totalWithdraw }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const initiateWithdraw = async () => {
    setLoading(true);
    await api
      .post("/collection/investments", {
        data: { type },
      })
      .then((res) => {
        cb()
        toast.success('Withdrawal processed successfully');
        setTimeout(closeModal, 1000);
        return res.data;
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      {" "}
      <div>
        <Button disabled={!totalWithdraw} onClick={openModal}>
          Withdraw Investments
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Withdraw</ModalHeader>
        <ModalBody>
          <Label className="mt-4">
            <span>Choose investment type</span>
            <Select
              placeholder="Select mode of payment"
              onChange={(e) => setType(e.target.value)}
              className="mt-1 border rounded-sm"
            >
             {country_list.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
            </Select>
          </Label>
          <span className="text-sm text-center text-red-600 mt-4">
            Withdrawal amount is limited to your balance amount
          </span>
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
            <Button  disabled={!type || loading} onClick={initiateWithdraw}>
              {loading ? "Loading" : "Confirm Withdrawal"}
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button disabled={!type || loading} onClick={initiateWithdraw} block size="large">
              {loading ? "Loading" : "Confirm Withdrawal"}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default WithDrawInvestment;
