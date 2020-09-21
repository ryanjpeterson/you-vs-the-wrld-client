import React from "react";
import axios from "axios";

import "./post.styles.css";

class PostPage extends React.Component {
  state = {
    post: {},
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(
        `https://us-central1-you-vs-the-wrld.cloudfunctions.net/api/posts/${this.props.postId}`
      )
      .then((res) => {
        this.setState({
          post: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { title, imageUrl, id, isLoading } = this.state.post;
    const loadingCard = <p>Loading...</p>;
    const content = (
      <div className="post-container">
        <h1>{title}</h1>

        <img className="post-image" src={imageUrl} alt={id} />
      </div>
    );

    return isLoading ? loadingCard : content;
  }
}

export default PostPage;
