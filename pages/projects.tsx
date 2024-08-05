import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
import { useState } from "react";

import projectsJson from '../content/projects.json';

import styles from '../styles/components/Projects.module.css';

const Projects = () => {
  const projectsList = projectsJson['projects'];

  const filterProject = (targetProject: string) => {
    const regExp = new RegExp(targetProject, 'i');
    return projectsList.filter(project => regExp.test(project.artist));
  }

  const [projects, setProjects] = useState(filterProject("Roman Angelos"))

  const projectCards = projects.map(project => <ProjectCard project={project} key={project.title} />);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const underlined = document.querySelector(`.${styles.underline}`);
    if (underlined !== null) underlined.classList.remove(`${styles.underline}`);

    const target = event.target as HTMLButtonElement
    target.classList.add(`${styles.underline}`);
    setProjects(filterProject(target.value));
  }

  return (
    <>
      <Head>
        <title>Rich Bennett Music Projects</title>
      </Head>
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
    </>
  );
};

export default Projects;
