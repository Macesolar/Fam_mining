import React, { useContext } from "react";
import { StateContext } from '../state/StateProvider';
import GooglePayButton from '@google-pay/button-react'
import { useHistory } from "react-router-dom";
import { useAuth } from '../Auth/Context/AuthContext'
import { db } from '../Firebase'
import './profile.css'


export default function Google () {
    const {value} = useContext(StateContext)
    const { currentUser } = useAuth()

    const history = useHistory()




    return (
        <div className="google">
            <GooglePayButton
                environment="TEST"
                buttonSizeMode="fill"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                        },
                    },
                    ],
                    merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: value,
                    currencyCode: 'USD',
                    countryCode: 'US',
                    },
                    shippingAddressRequired: false,
                    callbackIntents: ['PAYMENT_AUTHORIZATION']
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                    db.collection(`deposit`)
                    .doc(currentUser.uid)
                    .set({
                        paymentRequest,
                        date: new Date()
                    })
                    history.push('/success')
                }}
                onPaymentAuthorized={paymentData => {
                    //console.log('payment authorised success', paymentData);
                    //return {transactionState: 'success'}
                    db.collection(`deposit`)
                    .doc(currentUser.uid)
                    .set({
                        paymentData,
                        transactionState: 'success',
                        date: new Date()
                    })
                    history.push('/success')
                    return {transactionState: 'success'}
                   
                }}
                // existingPaymentMethodRequired= 'false'
                 buttonColor= 'white'
                  buttonType= 'Buy'
                />
        </div>
    )
}