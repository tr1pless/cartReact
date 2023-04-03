import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";

export const MyItem = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="cart__left">
        <div>
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </div>
      </div>
    </>
  );
};
