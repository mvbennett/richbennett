import React from "react";
import Image from "next/image";

import styles from '../styles/components/Productions.module.css';

interface props {
  production: {
    link: string,
    title: string,
    img: string,
    artist: string,
    icons: string[]
  }
}

const ProductionCard = ({production: {title, link, img, artist, icons}}: props) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.album}>
          <Image src={img} alt={title} fill style={{ objectFit: 'contain'}} sizes="100px" />
        </div>
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        <h3 className={styles.title}>
          {title}
          -
          {artist}
        </h3>
      </a>
      <div className={styles.icons}>
        {icons === undefined ? <div /> : icons.join(' / ')}
      </div>
    </div>
  );
};

export default ProductionCard;
