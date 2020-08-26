import React from "react";
import "./video-bg.styles.css";

const videoBg = () => {
  return (
    <video autoPlay muted loop id="video">
      <source
        src="https://firebasestorage.googleapis.com/v0/b/you-vs-the-wrld.appspot.com/o/yvtw_bg.mp4?alt=media&token=8d8c784e-a2b3-4eb1-aa95-e00d49174ccd"
        type="video/mp4"
      />
    </video>
  );
};

export default videoBg;
