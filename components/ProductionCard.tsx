import React from "react";
import Image, { StaticImageData } from "next/image";

interface props {
  production: {
    link: string,
    title: string,
    img: StaticImageData,
    artist: string,
    icons: string[]
  }
}

const ProductionCard = ({production: {title, link, img, artist, icons}}: props) => {
  return (
    <div className="production-card">
      <a href={link} target="_blank" rel="noreferrer">
        <Image src={img} alt={title} className="album-cover" />
      </a>
      <a href={link} target="_blank" rel="noreferrer">
        <h3 className="production-title">
          {title}
          -
          {artist}
        </h3>
      </a>
      <div className="production-icons">
        {icons === undefined ? <div /> : icons.join(' / ')}
      </div>
    </div>
  );
};

export default ProductionCard;
