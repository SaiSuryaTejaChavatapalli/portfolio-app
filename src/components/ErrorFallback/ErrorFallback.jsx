import React from "react";
import { icons } from "../../assets/icons/icons";
import { Link } from "react-router-dom";
import "./ErrorFallback.scss";
const ErrorFallback = () => {
  return (
    <div className="error-fallback-container">
      <div className="error-fallback-card">
        <img
          src={icons.ErrorFallBackImg}
          alt="something-went-wrong"
          className="error-fallback-image"
        />
        <Link to="/">
          <button className="error-fallback-button">HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorFallback;
