import React from "react";
import "./App.css";
import data from "./catalog.json";

const handleBuy = () => {
  console.log(e.id);
};

const products = data.products;

export const App = (props) => {
  return (
    <>
      <div>
        <div className="cart"></div>
        <button onClick={() => cartHandler()}>cart</button>
      </div>
      <div>
        {data.products.map((product) => {
          return (
            <div key={product.id} data-id={product.id} className="productItem">
              <p>{product.title}</p>
              <p>{product.price}</p>
              <button name={product.id} onClick={() => console.log(this)}>
                buy
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
