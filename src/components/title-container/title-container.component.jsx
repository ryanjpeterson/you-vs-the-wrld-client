import React from "react";
import "./title-container.styles.css";
import logo from "../../logo.png";

const titleContainer = () => {
  return (
    <div className="title-container">
      <img src={logo} alt="you vs the wrld" />
    </div>
  );
};

export default titleContainer;
