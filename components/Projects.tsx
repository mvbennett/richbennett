import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import { useState } from "react";

import projectsList from '../content/projects';

const Projects = () => {
  const [projects, setProjects] = useState((projectsList.filter((p) => {
    return p.artist === 'Roman Angelos'
  })))

  let projectCards = projects.map((project) => {
    return <ProjectCard project={project} key={project.title} />;
  });


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const underlined = document.querySelector('.underline');
    if (underlined !== null) underlined.classList.remove('underline');

    const target = e.target as HTMLButtonElement
    target.classList.add('underline');
    setProjects(projectsList.filter((p) => {
      return p.artist === target.value
    }))
  }

  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <h2>Projects</h2>
        <ul className="project-nav">
          <li>
            <button onClick={handleClick} className={'proj-nav-link underline'} value="Roman Angelos">
              Roman Angelos
            </button>
          </li>
          <li>
            <button onClick={handleClick} className={'proj-nav-link'} value="Limoncello">
              Limoncello
            </button>
          </li>
          <li>
            <button onClick={handleClick} className={'proj-nav-link'} value="Monocle">
              Monocle
            </button>
          </li>
        </ul>
        <div className="projects">
          {projectCards}
        </div>
      </div>
    </div>
  );
};

export default Projects;
