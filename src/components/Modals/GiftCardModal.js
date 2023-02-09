import { Modal, ModalHeader, ModalBody, ModalFooter, Button,  Label,
  Input, } from '@windmill/react-ui'

import React from 'react'
import { useState } from 'react'
import { api } from '../../utils/queries'
import { toast } from 'react-toastify'

const GiftCardModal = ({cb}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    function openModal() {
      setIsModalOpen(true)
    }
  
    function closeModal() {
      setIsModalOpen(false)
    }

    const initiatePayment = async () => {
      setLoading(true);
      await api
        .post("/donations", {amount, receipt:[], method:'gift card'})
        .then((res) => {
          toast('Desposit made')
          cb()
          setTimeout(closeModal, 1000)
          return res.data;
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
  return (
    <>
      <div>
        <Button onClick={openModal}>Deposit with gift card</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Deposit Gift card</ModalHeader>
        <ModalBody>
         Please specify the amount to be deposited and provide proof of payment if available
          <Label className="mt-4">
            <span>Amount</span>
            <Input
              className="mt-1"
              type="number"
              onChange={(e)=>setAmount(e.target.value)}
              name="amount"
              placeholder="$100"
            />
          </Label>
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
            <Button onClick={initiatePayment}>{loading? 'Loading' : 'Confirm payment'}</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button onClick={initiatePayment} block size="large">
            {loading? 'Loading' : 'Confirm payment'}
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default GiftCardModal