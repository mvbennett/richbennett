import React from "react";
import Navbar from "./Navbar";

import Post from "./Post";

const Latest = ({ latestPosts }: any) => {
  const latestPostsList = latestPosts.map((post: any) => {
    const img = post.fields.picture.fields?.file.url ? `https:${post.fields.picture.fields.file.url}` : ''
    return {
      title: post.fields.title,
      img: img,
      content: post.fields.postContent
    }
  })

  const posts = latestPostsList.map((post: any) => <Post post={post} key={post.title} />)
  return (
    <div>
      <Navbar home={true} />
      <div className="container">
        {posts}
      </div>
    </div>
  );
};

export default Latest;
