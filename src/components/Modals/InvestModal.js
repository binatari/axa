import { Modal, ModalHeader, ModalBody, ModalFooter, Button,  Label,
    Input, Select } from '@windmill/react-ui'
  
  import React from 'react'
  import { useState } from 'react'
  import { api } from '../../utils/queries'
  import { toast } from 'react-toastify'
  
  var country_list = [
 "residential",
 "industrial",
 "commercial"
  ];
  const InvestModal = ({cb}) => {
      const [isModalOpen, setIsModalOpen] = useState(false)
      const [loading, setLoading] = useState(false);
      const [amount, setAmount] = useState(0);
      const [type, setType] = useState("");
      function openModal() {
        setIsModalOpen(true)
      }
    
      function closeModal() {
        setIsModalOpen(false)
      }
  
      const initiatePayment = async () => {
        setLoading(true);
        await api
          .post("/investments", {data:{type, amount}})
          .then((res) => {
            toast('Investment made successfully')
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
          <Button onClick={openModal}>Invest</Button>
        </div>
  
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>Make an investment</ModalHeader>
          <ModalBody>
           Please specify the amount to be invested and the type of investment
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
            <Label className="mt-4">
                <span>Type</span>
                <Select value={type} onChange={(e)=>setType(e.target.value)} name="country" className="mt-1">
                  {country_list.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </Select>
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
  
  export default InvestModal