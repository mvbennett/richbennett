import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import { useState } from "react";

import projectsList from '../content/projects';

import styles from '../styles/components/Projects.module.css';

const Projects = () => {
  const [projects, setProjects] = useState((projectsList.filter((p) => {
    return p.artist === 'Roman Angelos'
  })))

  let projectCards = projects.map((project) => {
    return <ProjectCard project={project} key={project.title} />;
  });


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const underlined = document.querySelector(`.${styles.underline}`);
    if (underlined !== null) underlined.classList.remove(`${styles.underline}`);

    const target = e.target as HTMLButtonElement
    target.classList.add(`${styles.underline}`);
    setProjects(projectsList.filter((p) => {
      return p.artist === target.value
    }))
  }

  return (
    <div>
      <Navbar home={false} />
      <div className="container">
        <h2>Projects</h2>
        <ul className={styles.nav}>
          <li>
            <button onClick={handleClick} className={`${styles.navLink} ${styles.underline}`} value="Roman Angelos">
              Roman Angelos
            </button>
          </li>
          <li>
            <button onClick={handleClick} className={styles.navLink} value="Limoncello">
              Limoncello
            </button>
          </li>
          <li>
            <button onClick={handleClick} className={styles.navLink} value="Monocle">
              Monocle
            </button>
          </li>
        </ul>
        <div className={styles.projects}>
          {projectCards}
        </div>
      </div>
    </div>
  );
};

export default Projects;
