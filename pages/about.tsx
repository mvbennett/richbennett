import Head from "next/head";
import React from "react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import FormContainer from "../components/FormContainer";

import rich from '../public/images/rich.jpg'

import styles from '../styles/components/Bio.module.css';

const about = () => {
  return (
    <>
      <Head>
        <title>About Rich Bennett</title>
      </Head>
      <div>
        <Navbar home={false} />
        <div className="container">
          <div className={styles.card}>
            <div className={styles.pic}>
              <Image src={rich} alt="Rich Bennett" />
            </div>
            <div className={styles.info}>
              <p>
                Richard Bennett is an engineer, producer, and composer who has worked with bands diverse as The Shaggs, Hologram Teen, Mahogany, Rodney Cromwell, Alice Hubble, and Monocle. He is also one half of the Brazilian funk duo Limoncello (Far Out Recordings), and releases quirky space age jazz under the moniker “Roman Angelos”. His most recent record “Music For Underwater Supermarkets” was released in 2022 on Happy Robots Records and featured on BBC Radio 6.
              </p>
            </div>
          </div>
          <FormContainer />
        </div>
      </div>
    </>
  );
};

export default about;
