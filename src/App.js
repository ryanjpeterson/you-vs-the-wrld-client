import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";

import VideoBg from "./components/video-bg/video-bg.component";
import TitleContainer from "./components/title-container/title-container.component";

import HomePage from "./pages/home/home.component";
import PostPage from "./pages/post/post.component";

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get("https://us-central1-you-vs-the-wrld.cloudfunctions.net/api/posts")
      .then((res) => {
        this.setState({
          posts: res.data,
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
        <Route
          exact
          path="/"
          component={() => <HomePage posts={this.state.posts} />}
        />
        <Route
          exact
          path="/post/:postId"
          component={({ match }) => <PostPage postId={match.params.postId} />}
        />
      </div>
    );
  }
}

export default App;
