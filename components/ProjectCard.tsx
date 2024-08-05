import React from "react";
import Image from "next/image";

import styles from '../styles/components/Projects.module.css';

interface props {
  project: {
    title: string;
    img: string;
    link: string;
  },
  index: number|string;
}

const ProjectCard = ({ project: {title, img, link}, index }: props) => {
  return (
    <div className={styles.card}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.album}>
          <Image priority={index == 0} src={img} alt={title} className={styles.cover} fill style={{ objectFit: 'contain'}} sizes="300px" />
        </div>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p>{index}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
