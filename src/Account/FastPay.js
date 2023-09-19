import React, { useContext } from "react";
import { StateContext } from '../state/StateProvider'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export default function FastPay() {
    
    const { value }  = useContext(StateContext)



   const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: value,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'support@fammining.com',
      phonenumber: '07064586146',
      name: 'Customer care',
    },
    customizations: {
      title: 'Fam Mining',
      description: 'Payment for more mining times',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
       console.log(response);
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <div className="App">
     <h1>Proceed to Payment</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
}