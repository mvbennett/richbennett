import Head from "next/head"
import React from "react";
import ProductionCard from "../components/ProductionCard";
import Navbar from "../components/Navbar";

import productionsJson from '../content/productions.json';

const Productions = () => {
  const productionList = productionsJson['productions']

  const productions = productionList.map((prod, i) => <ProductionCard production={prod} key={i} index={i} />);

  return (
    <>
      <Head>
        <title>Recorded, Mixed, and Produced by Rich Bennett</title>
      </Head>
      <div>
        <Navbar home={false} />
        <div className="container">
          <h2>Recording, Producing, Mixing</h2>
          {productions}
        </div>
      </div>
    </>
  );
};

export default Productions;
