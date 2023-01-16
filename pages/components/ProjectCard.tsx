import React from "react";
import Image from "next/image";

interface props {
  project: {
    title: string,
    img: any,
    link: string
  }
}

const ProjectCard = ({ project: {title, img, link} }:props) => {
  return (
    <div className="project-card">
      <a href={link}>
        <Image src={img} alt={title} className="project-album-cover" />
        <h3 className="project-title">
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
