import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from '../styles/components/Projects.module.css';

interface props {
  project: {
    title: string,
    img: string,
    link: string
  }
}

const ProjectCard = ({ project: {title, img, link} }: props) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.album}>
          <Image src={img} alt={title} className={styles.cover} fill style={{ objectFit: 'contain'}} sizes="300px" />
        </div>
        <h3 className={styles.title}>
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
