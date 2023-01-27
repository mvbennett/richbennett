import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";

import postList from '../content/posts';
import Post from "./Post";

const Latest = () => {
  const posts = postList.map(post => <Post post={post} key={post.title} />)
  return (
    <div>
      <Navbar page="home" />
      <div className="container">
        {posts}
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default Latest;
