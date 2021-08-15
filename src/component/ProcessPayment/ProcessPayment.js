import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SipmleCartPayment from './SipmleCartPayment';

const stripePromise = loadStripe('pk_test_51JBBV6KFMO2n3YzdCB7Nvu3OgsawlUodUbAwvbUVBnXDziA6tuvAq7rHxIfm9CRWU4HuIzU6GyQtpj3wTwbJTrNr00ibNrBt2H');


const ProcessPayment = ({hanlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SipmleCartPayment handlePayment ={hanlePayment}></SipmleCartPayment>
        </Elements>
    );
};

export default ProcessPayment;