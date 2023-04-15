import React from "react";
import "./weatherOutput.css";
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import WeatherDetails from "./WeatherDetails";
import arrow from "../../images/arrow.svg";
const WeatherOutput = (props) => {
  return (
    <div className="weather_op_container">
      <div className="heading-op-container">
        <button onClick={() => props.setShow(false)}>
          <img src={arrow} alt="" />
        </button>
        <h1>Weather App</h1>
      </div>
      {(function () {
        if (props.weather?.isLoading) return <Loading />;
        else if (props.weather?.err === "error") {
          return <Error />;
        } else
          return (
            <WeatherDetails setShow={props.setShow} weather={props.weather} />
          );
      })()}
    </div>
  );
};

export default WeatherOutput;
