import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";
import { useState } from "react";

import underwaterSuper from '../public/images/underwater_supermarkets.jpg';
import spacetronic from '../public/images/spacetronic_lunchbox.jpg';
import italianSoda from '../public/images/italian_soda.jpg';
import pinkSand from '../public/images/pink_sand.jpg';
import musicaAqui from '../public/images/musica_aqui.jpg';
import dibenedetto from '../public/images/dibenedetto.jpg';
import soundParadise from '../public/images/sound_paradise.jpg';
import outerSunset from '../public/images/outer_sunset.jpg';


const Projects = () => {
  const projectsList = [
    {
      img: underwaterSuper,
      title: 'Music for Underwater Supermarkets',
      link: 'https://open.spotify.com/album/7xJfTkpi8FhHiCwhmMJXMO?si=KCRuk_-JTkefBqS6CLLbOA',
      artist: 'Roman Angelos'
    },
    {
      img: spacetronic,
      title: 'Spacetronic Lunchbox',
      link: 'https://open.spotify.com/album/7l8qxzT9ABDGHBs5sN1Rt4?si=I1tohPSWTYyXCPBSrm-_PQ',
      artist: 'Roman Angelos'
    },
    {
      img: italianSoda,
      title: 'Italian Soda',
      link: 'https://open.spotify.com/album/27RtvlLiC4r4nUF4Hh6xvr?si=4CXZsfv0QTuaeaEfbz4jNQ',
      artist: 'Roman Angelos'
    },
    {
      img: musicaAqui,
      title: 'Musica Aqui',
      link: 'https://open.spotify.com/album/4UT873Eh7d1fiOZuFwrmmv?si=fk5XV8mrTTmQdbaDbhTwRQ',
      artist: 'Limoncello'
    },
    {
      img: pinkSand,
      title: "Pink Sand",
      link: 'https://open.spotify.com/album/34va1Mi6xrlVYjbGw0eNkF?si=k492TVTaRkiju1wj0iog9Q',
      artist: 'Limoncello'
    },
    {
      img: dibenedetto,
      title: 'DiBenedetto',
      link: 'https://open.spotify.com/track/1g5deMU74SVhCSmWl0QjsR?autoplay=true',
      artist: 'Rich Bennett'
    },
    {
      img: soundParadise,
      title: 'Transpacific Sound Paradise',
      link: 'https://open.spotify.com/album/2A5YeZstkLJdjFqMyAggYH?at=10&uo=4',
      artist: 'Monocle'
    },
    {
      img: outerSunset,
      title: 'Outer Sunset',
      link: 'https://open.spotify.com/album/6sf4AszxS6NIV23faj2FSp',
      artist: 'Monocle'
    }
  ];
  const [projects, setProjects] = useState(projectsList)

  let projectCards = projects.map((project) => {
    return <ProjectCard project={project} key={project.title} />;
  });


  const handleClick = (e: any) => {
    e.preventDefault();

    setProjects(projectsList.filter((p) => {
      return p.artist === e.target.value
    }))
  }

  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <h2>Projects</h2>
        <ul className="project-nav">
          <li>
            <button onClick={handleClick} className={'proj-nav-link'} value="Roman Angelos">
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
