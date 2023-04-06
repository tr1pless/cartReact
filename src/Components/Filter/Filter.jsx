import React, { useState } from "react";
import { useDispatch } from "react-redux";
import data from "./../../catalog.json";
import { clearFilter, filterArray } from "./../store/cartSlice";
import "./filter.css";

export const Filter = () => {
  const dispatch = useDispatch();

  const [gender, setGender] = useState("nothing");
  const [category, setCategory] = useState("nothing");
  const [show, setShow] = useState(false);

  const products = data.products;

  const handleGender = (e) => {
    if (e.target.value === "nothing") {
      setGender(e.target.value);
      if (category !== e.target.value) {
        let result = products.filter((item) => item.category === category);
        dispatch(filterArray(result));
      } else {
        dispatch(clearFilter());
      }
    } else {
      if (category !== "nothing") {
        let result = products.filter(
          (item) => item.gender === e.target.value && item.category === category
        );
        dispatch(filterArray(result));
      } else {
        let result = products.filter((item) => item.gender === e.target.value);
        dispatch(filterArray(result));
      }
    }
    setGender(e.target.value);
  };

  const handleCategory = (e) => {
    if (e.target.value === "nothing") {
      setCategory(e.target.value);

      if (gender !== e.target.value) {
        let result = products.filter((item) => item.gender === gender);
        dispatch(filterArray(result));
      } else {
        dispatch(clearFilter());
      }
    } else {
      if (gender !== "nothing") {
        let result = products.filter(
          (item) => item.category === e.target.value && item.gender === gender
        );
        dispatch(filterArray(result));
      } else {
        let result = products.filter(
          (item) => item.category === e.target.value
        );
        dispatch(filterArray(result));
      }
    }
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="filterComp">
        <button
          className="showBtn"
          onClick={() => {
            setShow(!show);
          }}
        >
          <svg
            style={{ width: "39px", fill: "#214287" }}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m13 16.745c0-.414-.336-.75-.75-.75h-9.5c-.414 0-.75.336-.75.75s.336.75.75.75h9.5c.414 0 .75-.336.75-.75zm9-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm-4-5c0-.414-.336-.75-.75-.75h-14.5c-.414 0-.75.336-.75.75s.336.75.75.75h14.5c.414 0 .75-.336.75-.75z"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <div
          className="filterContainer"
          style={show ? { maxWidth: "0" } : { maxWidth: "300px" }}
        >
          <label htmlFor="gender" />
          <select name="gender" onChange={(e) => handleGender(e)}>
            <option value="nothing">All</option>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
          <label htmlFor="category" />
          <select name="category" onChange={(e) => handleCategory(e)}>
            <option value="nothing">All</option>
            <option value="RUNNING">running</option>
            <option value="FOOTBALL">football</option>
            <option value="CASUAL">casual</option>
            <option value="FORMAL">formal</option>
          </select>
          <button className="clearBtn" onClick={() => dispatch(clearFilter())}>
            <svg
              style={{ width: "45px", fill: "#214287" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
