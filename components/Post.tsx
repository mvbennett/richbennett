import Image, { StaticImageData } from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from '../styles/components/Latest.module.css';

interface props {
  post: {
    img: StaticImageData,
    title: string,
    content: any,
  }
}

const Post = ({post: { img, title, content } }:props) => {
  return(
    <div className={styles.post}>
      <div className={styles.image}>
        <Image className={styles.img} src={img} alt={title} priority={true} fill style={{ objectFit: 'contain'}} sizes="(max-width: 800px) 350px" />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        {documentToReactComponents(content)}
      </div>
    </div>
  )
}

export default Post;
