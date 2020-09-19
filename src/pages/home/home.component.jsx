import React from "react";
import axios from "axios";

import "./home.styles.css";

import GridContainer from "../../components/grid-container/grid-container.component";

class HomePage extends React.Component {
  state = {
    posts: [],
    loadedPosts: false,
  };

  componentDidMount() {
    axios
      .get("https://us-central1-you-vs-the-wrld.cloudfunctions.net/api/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
          loadedPosts: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <GridContainer posts={this.state.posts} loaded={this.state.loadedPosts} />
    );
  }
}

export default HomePage;
