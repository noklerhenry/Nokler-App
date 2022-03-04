import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, loadCart, removeToCart } from "../Actions";
import s from "./Cart.module.css";
import { Payment } from "./Payment";

export const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalPrice = 0;
    cart?.forEach((g) => {
      totalPrice = totalPrice + g.price * g.quantity;
    });
    setTotal(totalPrice);
  }, [cart]);

  const handleDelete = (id) => {
    dispatch(removeToCart(id));
  };
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className={s.container}>
      <h3>Shopping Cart</h3>
      {cart?.map((g) => {
        return (
          <div key={g.id}>
            <label>{g.name}</label>
            <label>
              ${g.price} x {g.quantity} = ${g.price * g.quantity}
            </label>
            <button className={s.button} onClick={() => handleDelete(g.id)}>
              X
            </button>
          </div>
        );
      })}
      <label>Total: ${total}</label>
      <button onClick={handleClear}>Clear all</button>
      <Payment amount={total} />
    </div>
  );
};
