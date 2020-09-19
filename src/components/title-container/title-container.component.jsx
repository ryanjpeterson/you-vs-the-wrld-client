import React from "react";
import "./title-container.styles.css";
import logo from "../../img/logo.png";

const titleContainer = () => {
  return (
    <a className="title-container" href="/">
      <img id="title" src={logo} alt="you vs the wrld" />
    </a>
  );
};

export default titleContainer;
