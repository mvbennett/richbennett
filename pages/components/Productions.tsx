import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

// import compose from '../assets/icons/compose.png';
// import produce from '../assets/icons/produce.png';
// import guitar from '../assets/icons/guitar.png';

import betweenTheFunk from '../../public/images/between_the_funk.jpg';
import memoryBox from '../../public/images/memory_box.jpg';
import fakeLove from '../../public/images/fake_love.jpg';
import pizzaConspiracy from '../../public/images/pizza_conspiracy.jpg';
import writtenStars from '../../public/images/written_stars.jpg';
import lastAmerican from '../../public/images/last_american.jpg';
import noMansLand from '../../public/images/no_mans_land.jpg';
import mustDance from '../../public/images/must_dance.jpg';
import comrades from '../../public/images/comrades.jpg';
import unhinged from '../../public/images/unhinged.jpg';
import knownObjects from '../../public/images/known_objects.jpg';
import animals from '../../public/images/animals.jpg';
import dottedLines from '../../public/images/dotted_lines.jpg';
import rubberPoultry from '../../public/images/rubber_poultry.jpg';
import onlyDaughter from '../../public/images/only_daughter.jpg';
import viewfinder from '../../public/images/viewfinder.jpg';

const ICONS = {
  compose: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639353/rich/compose_oi0ztl.png',
    name: 'Composer',
    img: ''
  },
  produce: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639441/rich/produce_zehr3w.png',
    name: 'Producer',
    img: ''
  },
  guitar: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639438/rich/guitar_nzlgek.png',
    name: 'Musician',
    img: ''
  }
};

const Productions = () => {
  const productionList = [
    {
      title: 'Memory Box',
      artist: 'Rodney Cromwell',
      img: memoryBox,
      link: 'https://open.spotify.com/album/5undXq2henqQw2lBmqcEM8',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Nong Voru / Fake Love',
      artist: 'Alfred Kpebesaane and Brittany Anjou',
      img: fakeLove,
      link: 'https://open.spotify.com/album/50n3k94DN57jjmCKWPinYd',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pizza Conspiracy',
      artist: 'Hologram Teen',
      img: pizzaConspiracy,
      link: 'https://open.spotify.com/album/0yWP0bki3piEYrWzRZH369',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Tiny Language',
      artist: 'Written in Stars',
      img: writtenStars,
      link: 'https://open.spotify.com/album/4Bl2sZmRKuLHR4RWrA0QOe',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'The Last American',
      artist: 'The President Lincoln',
      img: lastAmerican,
      link: 'https://open.spotify.com/artist/4QLj9lFZZHl8MoBHUBl63G',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: "No Man's Land",
      artist: 'Karen Dahlstrom',
      img: noMansLand,
      link: 'https://open.spotify.com/album/5rdxNUItJDMvRgKdwh52DT',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'If U Must Dance',
      artist: 'Sinosa',
      img: mustDance,
      link: 'https://open.spotify.com/album/2yrkWy7W8NZgyJ94IBdRhH',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: betweenTheFunk,
      link: 'https://open.spotify.com/album/0b2kXupVrhddF7wMPZwl63?si=jxb98IRcTY6pTBG12BCUvA',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Comrades',
      artist: 'Rodney Cromwell',
      img: comrades,
      link: 'https://open.spotify.com/album/7fr75k16inE48Vw0Lr3kYa',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Unhinged',
      artist: 'Elijah Shiffer and The Robber Crabs',
      img: unhinged,
      link: 'https://elijahshiffer.bandcamp.com/album/unhinged',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Known Objects',
      artist: 'Rebecca Pronsky',
      img: knownObjects,
      link: 'https://open.spotify.com/album/1ekf1fvOKJGFs14cHuFHfo',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Animals',
      artist: 'Albis',
      img: animals,
      link: 'https://open.spotify.com/album/0PnhlX8IoxTFuhH7elH46v',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'All These Dotted Lines',
      artist: 'Beverly Strokes',
      img: dottedLines,
      link: 'https://open.spotify.com/album/0TWtAD4faheODQdNQLf1ra'
    },
    {
      title: 'Rubber Poultry',
      artist: 'The New York Fowl Harmonic',
      img: rubberPoultry,
      link: 'https://thenewyorkfowlharmonic.bandcamp.com/album/rubber-poultry'
    },
    {
      title: 'Only Daughter',
      artist: 'Rebecca Pronsky',
      img: onlyDaughter,
      link: 'https://open.spotify.com/artist/1F05qDisbC9yIwLOxP1PPk',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Viewfinder',
      artist: 'Rebecca Pronsky',
      img: viewfinder,
      link: 'https://open.spotify.com/album/3BXcgIaH2SqYmVaxnByjbU',
      icons: [
        ICONS.produce
      ]
    }
  ];
  const productions = productionList.map((production) => {
    return <ProductionCard production={production} key={production.title} />;
  });
  return (
    <div>
      <Navbar page="secondary" />
      <div className="productions container">
        <h2>Recording, Producing, Mixing</h2>
        {productions}
      </div>
    </div>
  );
};

export default Productions;
