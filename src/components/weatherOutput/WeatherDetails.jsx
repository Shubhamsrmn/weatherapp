import React from "react";
import location from "../../images/location.svg";
import humidity from "../../images/humidity-svgrepo-com.svg";
import temperature from "../../images/temperature-svgrepo-com.svg";

import "./weatherOutput.css";
const WeatherDetails = (props) => {
  return (
    <>
      <img
        className="weather_icon"
        src={`${props?.weather?.current?.condition?.icon}`}
        alt=""
      />
      <span className="temperature">
        {props?.weather?.current?.temp_c} &#x2103;
      </span>
      <span>{props?.weather?.current?.condition?.text}</span>
      <span>
        <img src={location} alt="" className="locationicon" />
        <span>
          {props?.weather?.location?.name}, {props?.weather?.location?.region}
        </span>
      </span>
      <div className="humidity_container">
        <span className="sub_humidity firstcontainer">
          <img src={temperature} alt="" className="icon" />
          <span className="sub-text">
            <span className="text-bold">
              {props?.weather?.current?.feelslike_c} &#x2103;
            </span>
            <span className="small-text"> feels like</span>
          </span>
        </span>
        <span className="sub_humidity">
          <img src={humidity} alt="" className="icon" />
          <span className="sub-text">
            <span className="text-bold">
              {props?.weather?.current?.humidity}%{" "}
            </span>
            <span className="small-text">humidity</span>
          </span>
        </span>
      </div>
    </>
  );
};

export default WeatherDetails;
