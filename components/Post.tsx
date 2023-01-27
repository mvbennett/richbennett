import Image, { StaticImageData } from "next/image";

// import underwaterVinyl from '../public/images/underwatervinyl.webp'

interface props {
  post: {
    img: StaticImageData,
    title: string,
    content: string,
    link: string,
    linkText: string
  }
}

const Post = ({post: { img, title, content, link, linkText } }:props) => {
  // const posts = [
  //   {
  //     img: underwaterVinyl,
  //     title: 'Music for Underwater Supermarkets now on vinyl',
  //     content: 'Music for Underwater Supermarkets now returns with a vinyl format from Roman Angelos. Have you ever wondered what it would be like to explore a submerged supermarket? What would such a place look like, what would they sell, and most importantly; what kind of music would be playing? Now you can find out on this beautiful color vinyl.',
  //     link: "https://happyrobotsrecords.bandcamp.com/album/music-for-underwater-supermarkets",
  //     linkText: "Order on Bandcamp"
  //   }
  // ]
  // const post = posts[0]
  return(
    <div className="latest-post">
          <Image className="latest-img" src={img} alt={title} />
          <div className="latest-post-content">
            <h3>{title}</h3>
            <p>
              {content}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {linkText}
            </a>
          </div>
        </div>
  )
}

export default Post;
