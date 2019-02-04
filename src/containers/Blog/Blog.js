import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "axios";

class Blog extends Component {
  state = {
    posts: []
  };

  componentWillMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      const posts = response.data.slice(0, 4).map(elem => {
        return {
          ...elem,
          author: "Dan"
        };
      });
      this.setState({
        posts: posts
      });
      // console.log(response);
    });
  }

  render() {
    const postsList = this.state.posts.map(elem => {
      return <Post key={elem.id} title={elem.title} author={elem.author} />;
    });
    return (
      <div>
        <section className="Posts">{postsList}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
