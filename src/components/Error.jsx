import React from "react";
import error from "../utils/error.png";
import "./error.css";
const Error = () => {
  return (
    <div className="error_container">
      <img src={error} alt="" width={160} />
      <p>
        You have either Enter unvalid location OR there is problem will fetching
        data.
      </p>
    </div>
  );
};

export default Error;
