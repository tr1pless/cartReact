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
    <>
      <h3>Shopping Cart</h3>

      <div className="cartItem">
        <div className="cartItem__info">
          <div className="cartItem__titleWrp">
            <p className="cartItem__title">{title}</p>

            <button
              className="cartItem__removeButton cartItemBtn"
              onClick={() => dispatch(removeItem(id))}
            >
              <svg
                className="cartItemSvg"
                style={{ width: "30px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 8v2h-.642c-.534 0-1.022.305-1.257.786l-4.101 10.214h-12l-4.101-10.216c-.234-.48-.722-.784-1.256-.784h-.643v-2h3l4.352 11h9.296l4.352-11h3zm-9.428 7c1.039-6.826-3.961-10.102-3.961-10.102l.778-1.898-5.389 2.26 2.27 5.384.809-2.006c-.001 0 4.591 1.74 5.493 6.362z" />
              </svg>
            </button>
          </div>
          <div className="cartItemContainer">
            <img className="cartItemImg" src={image} alt="" /> <div></div>
            <div className="cartItemWrp">
              <div className="cartItem__incrDec">
                <button
                  className="cartItemBtn"
                  onClick={() => {
                    handleDecrement();
                  }}
                >
                  <svg
                    className="cartItemSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 10h24v4h-24z" />
                  </svg>
                </button>
                <p className="cartItemQuant">{quantity}</p>
                <button
                  className="cartItemBtn"
                  onClick={() => handleIncrement()}
                >
                  <svg
                    className="cartItemSvg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                  </svg>
                </button>
              </div>
              <p className="cartItemTotal">{`total: ${price * quantity}$`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
