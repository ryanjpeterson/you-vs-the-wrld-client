import React from "react";
import "./video-bg.styles.css";
import video from "../../yvtw_bg.mp4";

const videoBg = () => {
  return (
    <video autoPlay muted loop id="video">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default videoBg;
