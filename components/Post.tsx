import Image, { StaticImageData } from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from '../styles/components/Post.module.css';

interface props {
  post: {
    content: any;
    img: StaticImageData;
    index: number|string;
    title: string;
  }
}

const Post = ({post: { img, title, content, index } }: props) => {
  return(
    <div className={styles.post}>
      <div className={styles.image}>
        <Image className={styles.img} src={img} alt={title} priority={index == 0} fill style={{ objectFit: 'contain'}} sizes="(max-width: 800px) 350px" />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}

export default Post;
