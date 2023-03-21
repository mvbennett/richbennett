import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

import productionList from '../content/productions';
import styles from '../styles/components/Productions.module.css';


const Productions = () => {
  const productions = productionList.map((production) => {
    return <ProductionCard production={production} key={production.title} />;
  });
  return (
    <div>
      <Navbar home={false} />
      <div className="productions container">
        <h2>Recording, Producing, Mixing</h2>
        {productions}
      </div>
    </div>
  );
};

export default Productions;
