import React, { useState } from "react";
import "./inputLocation.css";
import { fetchFun, getLocationNFetch } from "../utils/fetchData";
const InputLocation = (props) => {
  const { setShow, setWeather } = props;
  const [input, setInput] = useState("");
  const changeHandler = (el) => {
    setInput(el.target.value);
  };
  const enterClickHandler = (el) => {
    if (el.key === "Enter") {
      fetchFun(input).then((data) => {
        const temp = { ...data };
        setWeather(temp); // weather data is changing
        setShow(true); // showing the weather data
      });
    }
  };
  const getLocationHandler = async () => {
    setWeather({ isLoading: true }); // weather data is changing
    setShow(true); // showing the weather data
    const successFun = async function (position) {
      let lon = position.coords.longitude + "";
      let lat = position.coords.latitude + "";
      const data = await getLocationNFetch(lat, lon);
      setWeather({ ...data });
      setShow(true); // showing the weather data
    };
    const errorFun = function (error) {
      console.log(error);
      setWeather({ err: "error" }); // weather data is changing
      setShow(true); // showing the weather data
    };
    navigator.geolocation.getCurrentPosition(successFun, errorFun); // geolocation for getting latitude and longtide and then fetchng data
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
        onKeyDown={enterClickHandler}
      />
      <p>or</p>
      <button className="location_btn" onClick={getLocationHandler}>
        Get Device Location
      </button>
    </>
  );
};

export default InputLocation;
