import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import FormButton from "./FormButton";

import postList from '../content/posts';
import Post from "./Post";
import FormContainer from "./FormContainer";

const Latest = () => {
  const [formDisplay, setFormDisplay] = useState(false);
  const posts = postList.map(post => <Post post={post} key={post.title} />)
  const handleClick = () => {
    if (formDisplay) {
      setFormDisplay(false);
    } else {
      setFormDisplay(true);
    }
  }
  return (
    <div>
      <Navbar page="home" />
      <div className="container">
        {/* <FormButton handleClick={handleClick} /> */}
        {formDisplay ? <FormContainer /> : ''}
        {posts}
      </div>
    </div>
  );
};

export default Latest;
