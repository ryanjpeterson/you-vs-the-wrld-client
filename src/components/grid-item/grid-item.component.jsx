import React from "react";
import "./grid-item.styles.css";

const gridItem = ({ gridNum, imageUrl }) => {
  return (
    <div className={`${gridNum ? `grid-${gridNum}` : ""} grid-item`}>
      <img className="grid-item-img" src={imageUrl} alt={gridNum} />
    </div>
  );
};

export default gridItem;
