import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "../CartItem/CartItem";

export const MyItem = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <>
      <div className="cartWrapper">
        <div className="cart">
          <h3>Shopping Cart</h3>
          {cart?.map((item) => (
            <CartItem
              image={item.image}
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
