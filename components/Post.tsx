import Image, { StaticImageData } from "next/image";

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
  return(
    <div className="latest-post">
          <Image className="latest-img" src={img} alt={title} priority={true} />
          <div className="latest-post-content">
            <h2>{title}</h2>
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
