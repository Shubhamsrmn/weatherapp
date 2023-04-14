import React, { useState } from "react";
import "./inputLocation.css";
import { fetchFun, getLocationNFetch } from "../utils/fetchData";
const InputLocation = (props) => {
  const { setShow, setWeather } = props;
  const [input, setInput] = useState("");
  const changeHandler = (el) => {
    setInput(el.target.value);
  };
  const handler = (el) => {
    if (el.key === "Enter") {
      fetchFun(input).then((data) => {
        const temp = { ...data };
        setWeather(temp);
        setShow(true);
      });
    }
  };
  const getLocationHandler = async () => {
    const data = await getLocationNFetch();
    setWeather({ ...data });
    setShow(true);
  };
  return (
    <>
      <input
        className="location_ip"
        type="text"
        required
        placeholder="Please Enter City Name"
        value={input}
        onChange={changeHandler}
        onKeyDown={handler}
      />
      <p>or</p>
      <button className="location_btn" onClick={getLocationHandler}>
        Get Device Location
      </button>
    </>
  );
};

export default InputLocation;
