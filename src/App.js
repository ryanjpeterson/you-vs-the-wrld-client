import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";

import VideoBg from "./components/video-bg/video-bg.component";
import TitleContainer from "./components/title-container/title-container.component";

import HomePage from "./pages/home/home.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoBg />
        <TitleContainer />
        <Route exact path="/" component={HomePage} />
      </div>
    );
  }
}

export default App;
