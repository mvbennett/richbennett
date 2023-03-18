import Image, { StaticImageData } from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface props {
  post: {
    img: StaticImageData,
    title: string,
    content: any,
  }
}

const Post = ({post: { img, title, content } }:props) => {
  return(
    <div className="latest-post">
      <div className="post-image">
        <Image className="latest-img" src={img} alt={title} priority={true} fill objectFit="contain" />
      </div>
      <div className="latest-post-content">
        <h2>{title}</h2>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}

export default Post;
