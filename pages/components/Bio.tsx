import React from "react";
import Navbar from "./Navbar";

const Bio = () => {
  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <div className="bio-card">
          <div className="bio-pic">
            <img src="https://images.squarespace-cdn.com/content/v1/5c3a67302714e564a6a8fc11/1622777719896-6KGUMG1N27WDCU7GKD0K/rich.jpg" alt="Rich Bennett" />
          </div>
          <div className="bio-info">
            <h3>
              Hi, I am Rich Bennett
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore velit vitae tempora sit necessitatibus excepturi numquam
              dolorem modi eos, nulla alias hic aperiam dolorum saepe praesentium
              perferendis eaque dolores laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
