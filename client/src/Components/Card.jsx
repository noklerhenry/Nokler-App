import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Actions";
import s from "./Card.module.css";

export const Card = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addToCart(id));
  };

  return (
    <div className={s.container}>
      <label>{name}</label>
      <img className={s.img} src={image} alt="img not found" />
      <label>${price}</label>
      <button className={s.button} onClick={() => handleClick(id)}>
        Add to cart
      </button>
    </div>
  );
};
