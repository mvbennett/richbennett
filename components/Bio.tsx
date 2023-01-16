import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

import rich from '../public/images/rich.jpg'

const Bio = () => {
  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <div className="bio-card">
          <div className="bio-pic">
            <Image src={rich} alt="Rich Bennett" />
          </div>
          <div className="bio-info">
            <h3>
              Hi, I am Rich Bennett
            </h3>
            <p>
              Rich is a multi-instrumentalist, composer, producer, recording engineer and co-founder of Acme Hall Studios. Rich began playing guitar at the age of 12 and won a Bertelsmann award for composition as a high school senior, sending him off to NYU, where he studied jazz guitar. A decade of performing and writing saw Rich on tour internationally with a number of bands and as a solo artist. Some of his production credits include gothic metal group Sabbath Assembly, dream pop outfit Monocle, electronica artist Morgane Lhote (Stereolab, Hologram Teen), and singer/songwriter Rebecca Pronsky. Rich currently plays guitar in the newly reunited outsider/60s proto-punk group The Shaggs. His compositions have been featured on MTV and the Discovery Channel. Before opening Acme, Rich served on the guitar faculty at the prestigious Third Street Music Settlement and was the guitar instructor at PS 41 The Greenwich Village School for a decade. In his 20 years of teaching in New York City, Rich has kept his focus on imparting good technique. He has developed a reputation as a patient and flexible instructor with a broad knowledge of musical styles and eras.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
