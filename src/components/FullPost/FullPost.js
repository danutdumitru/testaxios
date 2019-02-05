import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    post: null
  };

  componentDidUpdate() {
    if (this.props.postId) {
      if (!this.state.post || this.state.post.id !== this.props.postId)
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" + this.props.postId
          )
          .then(response => {
            console.log(response);
            this.setState({
              post: response.data
            });
          });
    }
  }

  onDeleteHandler = () => {
      axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.props.postId)
        .then( response => {
            console.log(response);
        })
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.postId) {
      if (!this.state.post) {
        post = <p style={{ textAlign: "center" }}>Loading...</p>;
      } else {
        post = (
          <div className="FullPost">
            <h1>{this.state.post.title}</h1>
            <p>{this.state.post.content}</p>
            <div className="Edit">
              <button className="Delete" onClick={this.onDeleteHandler}>Delete</button>
            </div>
          </div>
        );
      }
    }
    return post;
  }
}

export default FullPost;
