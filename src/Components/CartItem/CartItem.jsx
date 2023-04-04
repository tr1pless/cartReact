import React from "react";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  incrementSummary,
  decrementSummary,
} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import "./CartItem.css";

export const CartItem = ({ id, title, price, quantity = 0, image }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decrementSummary(price));
    dispatch(decrementQuantity(id));
  };

  const handleIncrement = () => {
    dispatch(incrementSummary(price));
    dispatch(incrementQuantity(id));
  };

  return (
    <div className="cartItem">
      <div className="cartItem__info">
        {/* <div style={{ backgroundImage: `${image}` }}></div> */}
        <p className="cartItem__title">{title}</p>
        <div className="cartItem__incrDec">
          <button
            onClick={() => {
              handleDecrement();
            }}
          >
            -
          </button>
          <p>{quantity}</p>
          <button onClick={() => handleIncrement()}>+</button>
          <p>{`total: ${price * quantity}$`}</p>
        </div>
        <button
          className="cartItem__removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
