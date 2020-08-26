import React from "react";
import "./grid-container.styles.css";

import GridItem from "../grid-item/grid-item.component";

const gridContainer = ({ posts, loaded }) => {
  return (
    <div className="grid-container">
      {posts.map((post, i) => {
        return <GridItem gridNum={i + 1} imageUrl={post.imageUrl} />;
      })}
    </div>
  );
};

export default gridContainer;
