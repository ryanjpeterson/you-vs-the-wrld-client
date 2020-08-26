import React from "react";
import "./grid-item.styles.css";

const gridItem = ({ num }) => {
  return <div className={`grid-${num} grid-item`}>{num}</div>;
};

export default gridItem;
