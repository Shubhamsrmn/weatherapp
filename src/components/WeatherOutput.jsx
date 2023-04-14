import React from "react";
import location from "../utils/location.svg";
import humidity from "../utils/humidity-svgrepo-com.svg";
import temperature from "../utils/temperature-svgrepo-com.svg";
import "./weatherOutput.css";
import Error from "./Error";
import Loading from "./Loading";
const WeatherOutput = (props) => {
  if (props.weather?.isLoading) return <Loading />;
  else if (props.weather?.err === "error") {
    return <Error />;
  }
  return (
    <div className="weather_op_container">
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
        <img src={location} alt="" className="icon" />
        <span>
          {props?.weather?.location?.name}, {props?.weather?.location?.region}
        </span>
      </span>
      <div className="humidity_container">
        <span className="sub_humidity">
          <img src={temperature} alt="" className="icon" />
          <span>
            {props?.weather?.current?.feelslike_c} &#x2103; feels like
          </span>
        </span>
        <span className="sub_humidity">
          <img src={humidity} alt="" className="icon" />
          <span>{props?.weather?.current?.humidity}% humidity</span>
        </span>
      </div>
    </div>
  );
};

export default WeatherOutput;
