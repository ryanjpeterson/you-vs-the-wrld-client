import React from "react";
import "./grid-container.styles.css";

import GridItem from "../grid-item/grid-item.component";

const gridContainer = ({ posts }) => {
  return (
    <div className="grid-container">
      {posts.map((post, i) => (
        <GridItem key={post.id} gridNum={i + 1} post={post} />
      ))}
    </div>
  );
};

export default gridContainer;
