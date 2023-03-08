import React from "react";
import Navbar from "./Navbar";

import Post from "./Post";

const Latest = ({ latestPosts }: any) => {
  const latestPostsList = latestPosts.map((post: any) => {
    return {
      title: post.fields.title,
      img: `https:${post.fields.picture.fields.file.url}`,
      content: post.fields.postContent
    }
  })

  const posts = latestPostsList.map((post: any) => <Post post={post} key={post.title} />)
  return (
    <div>
      <Navbar page="home" />
      <div className="container">
        {posts}
      </div>
    </div>
  );
};

export default Latest;
