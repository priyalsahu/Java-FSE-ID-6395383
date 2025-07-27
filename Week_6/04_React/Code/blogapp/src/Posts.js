import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
    console.log("Constructor: Component Initialized");
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => {
        console.error("Error loading posts:", error);
        this.setState({ hasError: true });
      });
  };

  componentDidMount() {
    console.log("componentDidMount: Fetching Posts...");
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    console.error("componentDidCatch: Error Boundary Triggered");
    alert("An error occurred in the Posts component.");
    this.setState({ hasError: true });
  }

  render() {
    console.log("Render: Rendering Posts...");
    if (this.state.hasError) {
      return <h2>Something went wrong while loading posts.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;