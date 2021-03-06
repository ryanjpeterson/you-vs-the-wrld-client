import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";

import VideoBg from "./components/video-bg/video-bg.component";
import Header from "./components/header/header.component";

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
        <Header />
        <Route
          exact
          path="/"
          component={() => <HomePage posts={this.state.posts} />}
        />
        <Route
          exact
          path="/posts/:postId"
          component={({ match }) => <PostPage postId={match.params.postId} />}
        />
      </div>
    );
  }
}

export default App;
