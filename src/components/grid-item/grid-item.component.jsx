import React from "react";
import "./grid-item.styles.css";

const gridItem = ({ gridNum, post }) => {
  return (
    <div className={`${gridNum ? `grid-${gridNum}` : ""} grid-item`}>
      <a href={`/post/${post.id}`}>
        <img className="grid-item-img" src={post.imageUrl} alt={gridNum} />
      </a>
    </div>
  );
};

export default gridItem;
