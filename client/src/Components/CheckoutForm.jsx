import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import s from "./Checkout.module.css";
import { useAuth0 } from '@auth0/auth0-react';

export const CheckoutForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();

  const{ isAuthenticated } = useAuth0();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(isAuthenticated) {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      !error ? console.log(paymentMethod, amount * 100) : console.log(error);
      elements.getElement(CardElement).clear();
    } else {
      alert("You have to log in to make the purchase")
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <CardElement />
      <button className={s.buy}>Buy</button>
    </form>
  );
};
