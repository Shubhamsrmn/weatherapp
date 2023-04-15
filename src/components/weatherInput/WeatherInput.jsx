import "./weatherInput.css";
import InputLocation from "./InputLocation";
const WeatherInput = (props) => {
  return (
    <div className="app_container">
      <h1 className="title">The Weather App</h1>
      <hr />
      <InputLocation setShow={props.setShow} setWeather={props.setWeather} />
    </div>
  );
};

export default WeatherInput;

// import React, { useState } from "react";
// import WeatherOutput from "../WeatherOutput";
// import arrow from "../utils/arrow.svg";
// const [show, setShow] = useState(false);
// const [weather, setWeather] = useState({}); // the weather data object
{
  /* <div className="heading_container">
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
      )} */
}
