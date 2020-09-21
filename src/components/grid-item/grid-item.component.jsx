import React from "react";
import "./grid-item.styles.css";

const gridItem = ({ gridNum, post, title }) => {
  return (
    <div className={`${gridNum ? `grid-${gridNum}` : ""} grid-item`}>
      <a href={`/posts/${post.id}`}>
        <img className="grid-item-img" src={post.imageUrl} alt={title} />
      </a>
    </div>
  );
};

export default gridItem;
