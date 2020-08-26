import React from "react";
import "./App.css";
import logo from "./logo.png";
import video from "./yvtw_bg.mp4";

import GridItem from "./components/grid-item.component";

const nums = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
];

function App() {
  return (
    <div className="App">
      <video autoPlay muted loop id="video">
        <source src={video} type="video/mp4" />
      </video>

      <div className="title-container">
        <img src={logo} alt="you vs the wrld" />
      </div>

      <div className="grid-container">
        {nums.map((num) => {
          return <GridItem num={num} />;
        })}
      </div>
    </div>
  );
}

export default App;
