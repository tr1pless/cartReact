import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, incrementSummary, setHide } from "../store/cartSlice";
import data from "./../../catalog.json";

export const UnFiltered = () => {
  const dispatch = useDispatch();
  const products = data.products;
  const handleBuy = (e) => {
    const result = data.products.find((item) => item.id === +e.target.id);
    dispatch(setHide(false));
    console.log(result, result.title);
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

  return products.map((product) => {
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
  });
};
