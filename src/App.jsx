import React from "react";
import "./App.css";
import data from "./catalog.json";
import { MyItem } from "./Components/Cart/Cart";
import { addToCart, incrementSummary } from "./Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const App = (props) => {
  const cart = useSelector((state) => state.cart);
  const summary = useSelector((state) => state.summary);
  const dispatch = useDispatch();

  const handleBuy = (e) => {
    const result = products.find((item) => item.id == e.target.id);
    dispatch(
      addToCart({
        title: result.title,
        id: result.id,
        price: result.price,
        quantity: 1,
      })
    );
    dispatch(incrementSummary(result.price));
  };

  const products = data.products;

  return (
    <>
      <div>
        <div className="cart">
          <MyItem />

          <div>Total SUMMARY: {summary > 0 ? summary : "0"}</div>
        </div>
        {/* <button onClick={() => cartHandler()}>cart</button> */}
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
