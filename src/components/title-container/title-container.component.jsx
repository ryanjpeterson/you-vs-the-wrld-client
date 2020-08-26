import React from "react";
import "./title-container.styles.css";
import logo from "../../img/logo.png";

const titleContainer = () => {
  return (
    <div className="title-container">
      <img id="title" src={logo} alt="you vs the wrld" />
    </div>
  );
};

export default titleContainer;
