import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import data from "./../../catalog.json";
import { clearFilter, filterArray } from "./../store/cartSlice";

export const Filter = () => {
  const filter = useSelector((state) => state.filtered);
  const filtered = useSelector((state) => state.filterDone);
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const products = data.products;

  const handleGender = (e) => {
    if (e.target.value === "select") {
      return;
    } else {
      const result = products.filter((item) => item.gender === e.target.value);
      dispatch(filterArray(result));
      console.log(filter, filtered);
    }
  };
  const handleCategory = (e) => {
    if (e.target.value === "select") {
      return;
    } else {
      const result = products.filter(
        (item) => item.category === e.target.value
      );
      dispatch(filterArray(result));
      console.log(filter, filtered);
    }
  };

  return (
    <div className="">
      <label htmlFor="gender">Gender</label>
      <select name="gender" onChange={(e) => handleGender(e)}>
        <option value="select">-</option>
        <option value="MEN">MEN</option>
        <option value="WOMEN">WOMEN</option>
        <option value="KIDS">KIDS</option>
      </select>
      <label htmlFor="category">category</label>
      <select name="category" onChange={(e) => handleCategory(e)}>
        <option value="select">-</option>
        <option value="RUNNING">running</option>
        <option value="FOOTBALL">football</option>
        <option value="CASUAL">casual</option>
      </select>
      <button
        onClick={() => {
          dispatch(clearFilter()), console.log(filter, filtered);
        }}
      >
        Clear
      </button>
    </div>
  );
};
