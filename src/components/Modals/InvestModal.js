import { Modal, ModalHeader, ModalBody, ModalFooter, Button,  Label,
    Input, Select } from '@windmill/react-ui'
  
  import React, { useEffect } from 'react'
  import { useState } from 'react'
  import { api } from '../../utils/queries'
  import { toast } from 'react-toastify'
  
  var country_list = [
  "",
 "residential",
 "industrial",
 "commercial"
  ];
  const InvestModal = ({cb}) => {
      const [isModalOpen, setIsModalOpen] = useState(false)
      const [loading, setLoading] = useState(false);
      const [investLoading, setInvestLoading] = useState(false);
      const [amount, setAmount] = useState(0);
      const [bal, setBal] = useState(0);
      const [type, setType] = useState("");
      function openModal() {
        setIsModalOpen(true)
      }
    
      function closeModal() {
        setIsModalOpen(false)
      }

      const aggregate = async () => {
        setLoading(true)
        await api
          .get("/donations?pagination[pageSize]=1000" +'&fields[0]=amount&fields[1]=is_verified')
          .then((res) => {
            const getVerified = res.data.data.filter((res)=>res.attributes.is_verified)
            const getUnVerified = res.data.data.filter((res)=>!res.attributes.is_verified)
            const getAggregate = getVerified.reduce(function (
              accumulator,
              curValue
            ) {
              return accumulator + Number(curValue.attributes.amount);
            },
            0);
           setBal(getAggregate)
          })
          .catch((err) => console.log(err))
          .finally(()=>setLoading(false))
      };

      useEffect(()=>{
        aggregate()
      }, [isModalOpen])
  
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
                <Select value={type} onChange={(e)=>setType(e.target.value)} name="country" className="mt-1 border rounded-sm">
                  {country_list.map((country) => (
                    <option value={country}>{country}</option>
                  ))}
                </Select>
              </Label>
              { amount && type ? (
                <>
                  <p className=" text-sm mt-4 ">Earn up to</p>
                  <p className=" text-lg mt-2 font-bold"> ${type == 'residential'? (amount * 0.07).toFixed(2) : type == 'commercial' ? (amount * 0.09).toFixed(2)  : (amount * 0.05).toFixed(2) } </p>
                  <p className=" text-sm mt-1 ">Interest weekly</p>
                </>
              ) : null}
              {
                type ?  <p className="font-semibold mt-4">Get up to {type == 'residential'? '7%' : type == 'commercial' ? '9%' : '5%' } with {type} investments</p> : null
              }
             
          </ModalBody>
          <ModalFooter>
            {/* I don't like this approach. Consider passing a prop to ModalFooter
             * that if present, would duplicate the buttons in a way similar to this.
             * Or, maybe find some way to pass something like size="large md:regular"
             * to Button
             */}
             <div>
              <div className='flex justify-end  gap-4 w-full' >
              <div className="hidden sm:block">
              <Button layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="hidden sm:block">
              <Button disabled={!amount || amount > bal || !type} onClick={initiatePayment}>{loading? 'Loading' : 'Confirm payment'}</Button>
            </div>
              </div>
              {
                amount > bal ?  <p className='text-sm text-red-600 text-center '>Amount to be invested is greater than your current balance, please top up or reduce amount to be invested</p> : null
              }
             
             </div>
           
         
            <div className="block w-full sm:hidden">
              <Button block size="large" layout="outline" onClick={closeModal}>
                Cancel
              </Button>
            </div>
            <div className="block w-full sm:hidden">
              <Button disabled={!amount || amount > bal || !type} onClick={initiatePayment} block size="large">
              {loading? 'Loading' : 'Confirm Investment'}
              </Button>
              {
                amount > bal ?  <p className='text-sm text-center text-red-600'>Amount to be invested is greater than your current balance, please top up or reduce amount to be invested</p> : null
              }
            </div>
          </ModalFooter>
        </Modal>
      </>
    )
  }
  
  export default InvestModal