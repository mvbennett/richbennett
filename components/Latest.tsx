import React from "react";
import Navbar from "./Navbar";

import Post from "./Post";

const Latest = ({ latestPosts }: any) => {
  const latestPostsList = latestPosts.map((post: any, index: number) => {
    const img = post.fields.picture.fields?.file.url ? `https:${post.fields.picture.fields.file.url}` : ''
    return {
      content: post.fields.postContent,
      img: img,
      index,
      title: post.fields.title,
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
