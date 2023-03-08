import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";

import Post from "./Post";
import FormContainer from "./FormContainer";

const Latest = ({ latestPosts }: any) => {
  const [formDisplay, setFormDisplay] = useState(false);

  const latestPostsList = latestPosts.map((post: any) => {
    return {
      title: post.fields.title,
      img: `https:${post.fields.picture.fields.file.url}`,
      content: post.fields.postContent
    }
  })

  const posts = latestPostsList.map((post: any) => <Post post={post} key={post.title} />)
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
        {formDisplay ? <FormContainer /> : ''}
        {posts}
      </div>
    </div>
  );
};

export default Latest;
