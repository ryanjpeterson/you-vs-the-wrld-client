import React from "react";
import "./App.css";
import axios from "axios";

import VideoBg from "./components/video-bg/video-bg.component";
import TitleContainer from "./components/title-container/title-container.component";
import GridContainer from "./components/grid-container/grid-container.component";

class App extends React.Component {
  state = {
    posts: [],
    loadedPosts: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/posts")
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
      <div className="App">
        <VideoBg />
        <TitleContainer />
        <GridContainer
          posts={this.state.posts}
          loaded={this.state.loadedPosts}
        />
      </div>
    );
  }
}

export default App;
