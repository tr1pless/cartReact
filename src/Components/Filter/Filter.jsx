import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="">
      <label for="gender">Gender</label>
      <select name="gender" onChange={(e) => handleGender(e)}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="kids">kids</option>
      </select>
      <label for="category" onChange={(e) => handleCategory(e)}>
        category
      </label>
      <select name="gender">
        <option value="running">running</option>
        <option value="football">football</option>
        <option value="casual">casual</option>
      </select>
    </div>
  );
};
