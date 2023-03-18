import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  project: {
    title: string,
    img: StaticImageData,
    link: string
  }
}

const ProjectCard = ({ project: {title, img, link} }: props) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} alt={title} className="project-album-cover" />
        <h3 className="project-title">
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
