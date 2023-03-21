import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from '../styles/components/Projects.module.css';

interface props {
  project: {
    title: string,
    img: StaticImageData,
    link: string
  }
}

const ProjectCard = ({ project: {title, img, link} }: props) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} alt={title} className={styles.albumCover} />
        <h3 className={styles.title}>
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
