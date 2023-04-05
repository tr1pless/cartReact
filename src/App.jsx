import React, { useState } from "react";
import "./App.css";
import data from "./catalog.json";
import { MyItem } from "./Components/Cart/Cart";
import { addToCart, incrementSummary } from "./Components/store/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Filter } from "./Components/Filter/Filter";

export const App = (props) => {
  const [hide, setHide] = useState(true);

  const cart = useSelector((state) => state.cart);
  const summary = useSelector((state) => state.summary);
  const dispatch = useDispatch();

  const products = data.products;

  useEffect(() => {
    if (summary === 0) {
      setHide(true);
    }
  });

  const handleBuy = (e) => {
    console.log(e.target.id);
    const result = data.products.find((item) => item.id == e.target.id);
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

  return (
    <>
      <Filter />
      <button className="hideButton" onClick={() => cartHandler()}>
        <svg
          className="cartHideSvg"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
        >
          <path d="M10.028 15h-5.413l-4.615-11h15l-.564 2h-11.428l2.938 7h2.678l1.404 2zm7.544-5.439l1.756-5.561h1.929l.743-2h-4.195l-2.489 7.979 2.256-.418zm-10.072 6.439c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm14.011-3.454c1.44 2.018 1.041 3.439 2.489 5.471l-5.585 3.983c-3.015-2.246-5.617-2.966-6.458-3.248-.801-.27-1.317-.783-1.14-1.428.181-.652.862-.846 1.424-.821.848.039 1.536.293 1.536.293l-3.896-5.461c-.348-.488-.234-1.165.254-1.512.486-.348 1.163-.234 1.511.253l2.639 3.693c.127.178.374.22.553.093.179-.127.22-.375.093-.553l-.65-.912 1.047-.261c.274-.067.562.04.726.27l.532.746c.127.179.374.22.553.093.179-.127.22-.375.093-.554l-.614-.861 1.027-.23c.27-.058.548.05.708.274l.452.634c.127.178.375.219.553.093.179-.127.22-.375.093-.553l-.507-.71.303-.054c1.052-.186 1.623.363 2.264 1.262zm-12.006-3.597c.676-.482 1.55-.498 2.201.002-.371-1.242-1.856-1.754-2.913-1-1.059.756-1.054 2.326-.003 3.079-.261-.778.039-1.599.715-2.081z" />
        </svg>
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
            <div className="cartTotal">
              Total Price: {summary > 0 ? summary : "0"}$
            </div>
          </div>
        </div>
        <div className="products">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className={`productItemWrp${product.id} productItemWrp`}
              >
                <div style={{ position: "relative" }}>
                  <div className="productBtnWrp">
                    <div
                      style={{ position: "relative" }}
                      data-id={product.id}
                      className={`productItem productItem${product.id}`}
                    >
                      <p className="productTitle">{product.title}</p>
                      <p className="productPrice">Price: {product.price}$</p>
                    </div>

                    <button
                      className="productBtn"
                      id={product.id}
                      onClick={(e) => handleBuy(e)}
                    >
                      <svg
                        id={product.id}
                        className="productBtn__svg"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id={product.id}
                          d="M10 21.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.305-15l-3.432 12h-10.428l-3.777-9h-2.168l4.615 11h13.239l3.474-12h1.929l.743-2h-4.195zm-13.805-4c6.712 1.617 7 9 7 9h2l-4 4-4-4h2s.94-6.42-3-9z"
                        />
                      </svg>
                    </button>
                    <span className="productBtnTriangle"></span>
                  </div>

                  <img
                    className={`productImg productImg${product.id}`}
                    src={product.imageURL}
                    alt=""
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
