import React from "react";
import Image from "next/image";

const ProductionCard = ({ production }) => {
  return (
    <div className="production-card">
      <a href={production.link} target="_blank" rel="noreferrer">
        <Image src={production.img} alt={production.title} className="album-cover" />
      </a>
      <a href={production.link} target="_blank" rel="noreferrer">
        <h3 className="production-title">
          {production.title}
          -
          {production.artist}
        </h3>
      </a>
      <div className="production-icons">
        {production.icons === undefined ? <div /> : production.icons.map((icon) => {
          return <img src={icon.img} alt={icon.name} key={icon.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductionCard;
