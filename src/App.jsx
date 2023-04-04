import React, { useState } from "react";
import "./App.css";
import data from "./catalog.json";
import { MyItem } from "./Components/Cart/Cart";
import { addToCart, incrementSummary } from "./Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const App = (props) => {
  const [hide, setHide] = useState(true);

  const cart = useSelector((state) => state.cart);
  const summary = useSelector((state) => state.summary);
  const dispatch = useDispatch();

  useEffect(() => {
    if (summary === 0) {
      setHide(true);
    }
  });

  const handleBuy = (e) => {
    const result = products.find((item) => item.id == e.target.id);
    setHide(false);
    dispatch(
      addToCart({
        title: result.title,
        id: result.id,
        price: result.price,
        quantity: 1,
        image: result.imageURL,
      })
    );
    dispatch(incrementSummary(result.price));
  };

  const cartHandler = () => {
    if (cart.length <= 0) {
      return;
    } else {
      setHide(!hide);
    }
  };

  const products = data.products;

  return (
    <>
      <button className="hideButton" onClick={() => cartHandler()}>
        cart
      </button>

      <div className="container">
        <div
          style={{ transition: "1s" }}
          className={hide ? " cartComp__hidden" : "cartComp__wrapper"}
        >
          <div
            className={
              hide ? "cartComp hiddenCartComp" : "cartComp activeCartComp"
            }
          >
            <MyItem />
            <div>Total SUMMARY: {summary > 0 ? summary : "0"}</div>
          </div>
        </div>
        <div className="products">
          {products.map((product) => {
            return (
              <div className={`productItemWrp${product.id} productItemWrp`}>
                <img
                  className={`productImg productImg${product.id}`}
                  src={product.imageURL}
                  alt=""
                ></img>
                <div
                  style={{ position: "relative" }}
                  key={product.id}
                  data-id={product.id}
                  className={`productItem productItem${product.id}`}
                >
                  <p className="productTitle">{product.title}</p>
                  <p className="productPrice">{product.price}$</p>
                  <button
                    className="productBtn"
                    id={product.id}
                    onClick={(e) => handleBuy(e)}
                  >
                    buy
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
