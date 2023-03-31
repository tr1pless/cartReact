import React, { useState } from "react";
import "./App.css";
import data from "./catalog.json";

export const App = (props) => {
  const [cart, setCart] = useState([]);
  const [summary, setSummary] = useState(0);

  const handleBuy = (e) => {
    const result = products.find((item) => item.id == e.target.id);
    const cartRes = cart.find((item) => item.id == e.target.id);
    if (cartRes) {
      ++cartRes.quantity;
    } else {
      cart.push({
        id: result.id,
        title: result.title,
        price: result.price,
        quantity: +1,
      });
    }
    console.log(cart, summary);
  };

  const products = data.products;

  return (
    <>
      <div>
        <div className="cart">
          {cart.map((cartItem) => {
            setSummary(summary + cartItem.price * cartItem.quantity);
            return (
              <>
                <div>IMG</div>
                <p>{cartItem.title}</p>
                <p>Price: {cartItem.price}</p>
                <p>Quantity: {cartItem.quantity}</p>
                <p>Total Sum: {cartItem.price * cartItem.quantity}</p>
              </>
            );
          })}
          <div>Total : {summary > 0 ? summary : "0"}</div>
        </div>
        <button onClick={() => cartHandler()}>cart</button>
      </div>
      <div>
        {products.map((product) => {
          return (
            <div key={product.id} data-id={product.id} className="productItem">
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button id={product.id} onClick={(e) => handleBuy(e)}>
                buy
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
