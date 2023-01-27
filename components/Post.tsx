import Image from "next/image";

import underwaterVinyl from '../public/images/underwatervinyl.webp'

const Post = () => {
  const posts = [
    {
      img: underwaterVinyl,
      title: 'Music for Underwater Supermarkets now on vinyl',
      content: 'Music for Underwater Supermarkets now returns with a vinyl format from Roman Angelos. Have you ever wondered what it would be like to explore a submerged supermarket? What would such a place look like, what would they sell, and most importantly; what kind of music would be playing? Now you can find out on this beautiful color vinyl.',
      link: "https://happyrobotsrecords.bandcamp.com/album/music-for-underwater-supermarkets",
      linkText: "Order on Bandcamp"
    }
  ]
  const post = posts[0]
  return(
    <div className="latest-post">
          <Image className="latest-img" src={post.img} alt={post.title} />
          <div className="latest-post-content">
            <h3>{post.title}</h3>
            <p>
              {post.content}
            </p>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
            >
              {post.linkText}
            </a>
          </div>
        </div>
  )
}

export default Post;
