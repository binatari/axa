import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Label,
    Input,
  } from "@windmill/react-ui";
  
  import React from "react";
  import { useState } from "react";
  import { api } from "../../utils/queries";
  import { toast } from "react-toastify";

const WithDrawModal = ({cb, totalWithdraw}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    function openModal() {
      setIsModalOpen(true);
    }
  
    function closeModal() {
      setIsModalOpen(false);
    }

    const initiateWithdraw = async () => {
        setLoading(true);
        await api
          .post("/withdrawals", {
            data: { amount, is_verified:false },
          })
          .then((res) => {
            toast.success("Your withdrawal has been placed");
            cb();
            setTimeout(closeModal, 1000);
            return res.data;
          })
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      };
  return (
    <div>   <div>
    <Button disabled={!totalWithdraw} onClick={openModal}>Withdraw</Button>
  </div>

  <Modal isOpen={isModalOpen} onClose={closeModal}>
    <ModalHeader>Withdraw</ModalHeader>
    <ModalBody>
      <Label className="mt-4">
        <span>Amount</span>
        <Input
          className="mt-1"
          type="number"
          value={amount}
          onChange={(e) => {
            if(e.target.value > totalWithdraw){
                return
            }
            setAmount(e.target.value)
        }}
          name="amount"
          placeholder="$100"
        />
      </Label>
      <span className='text-sm text-center text-red-600 mt-4' >Withdrawal amount is limited to your balance amount</span>
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
        <Button disabled={loading} onClick={initiateWithdraw}>
          {loading ? "Loading" : "Confirm Withdrawal"}
        </Button>
      </div>
      <div className="block w-full sm:hidden">
        <Button block size="large" layout="outline" onClick={closeModal}>
          Cancel
        </Button>
      </div>
      <div className="block w-full sm:hidden">
        <Button disabled={loading} onClick={initiateWithdraw} block size="large">
          {loading ? "Loading" : "Confirm Withdrawal"}
        </Button>
      </div>
    </ModalFooter>
  </Modal></div>
  )
}

export default WithDrawModal