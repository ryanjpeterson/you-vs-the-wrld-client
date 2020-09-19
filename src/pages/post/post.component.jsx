import React from "react";
import axios from "axios";

import "./post.styles.css";

class PostPage extends React.Component {
  state = {
    post: {},
  };

  componentDidMount() {
    axios
      .get(
        `https://us-central1-you-vs-the-wrld.cloudfunctions.net/api/posts/${this.props.postId}`
      )
      .then((res) => {
        this.setState({
          post: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="post-container">
        <div className="flex-divider">
          <img
            className="post-image"
            src={this.state.post.imageUrl}
            alt={this.state.post.id}
          />
        </div>
      </div>
    );
  }
}

export default PostPage;
