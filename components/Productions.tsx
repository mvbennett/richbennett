import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

import productionsJson from '../content/productions.json';

const Productions = () => {
  const productionList = productionsJson['productions']

  const productions = productionList.map((production) => {
    return <ProductionCard production={production} key={production.title} />;
  });
  return (
    <div>
      <Navbar home={false} />
      <div className="container">
        <h2>Recording, Producing, Mixing</h2>
        {productions}
      </div>
    </div>
  );
};

export default Productions;
