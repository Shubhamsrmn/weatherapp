import React, { useState } from "react";
import "./weatherInput.css";
import InputLocation from "./InputLocation";
import WeatherOutput from "./WeatherOutput";
import arrow from "../utils/arrow.svg";
const WeatherInput = () => {
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState({});
  return (
    <div className="app_container">
      <div className="heading_container">
        {!show ? (
          ""
        ) : (
          <button className="back_btn" onClick={() => setShow(false)}>
            <img src={arrow} alt="" />
          </button>
        )}
        <h1 className="title">The Weather App</h1>
      </div>
      {!show ? (
        <InputLocation setShow={setShow} setWeather={setWeather} />
      ) : (
        <WeatherOutput weather={weather} />
      )}
    </div>
  );
};

export default WeatherInput;
