import React from "react";
import Link from 'next/link';

import { useState } from "react";


interface page {
  page: string;
}

const Navbar = ({ page }:page) => {
  const [visibility, setVisibility] = useState('closed')
  const handleClick = () => {
    if (visibility === 'closed') {
      setVisibility('open')
    } else if (visibility === 'open') {
      setVisibility('closed');
    }
  }
  const formToggle = () => {
    alert('clicked!!!')
  }
  return (
    <div className={`${page}-navbar`}>
      <div className="title-burger">
        <Link href="/" className="nav-title-link">
          <h1 className={`${page}-nav-title nav-title`}>
            Rich Bennett
          </h1>
        </Link>
        <button type="button" className="hamburger" onClick={handleClick}>
        <span className="material-symbols-outlined">
          {visibility === 'closed' ? 'menu' : 'close'}
        </span>
        </button>
      </div>
      <div className="navbar-collapse">
        <ul className={`${page}-nav-links ${visibility === 'open' ? '' : 'collapse'}`}>
          <li className="nav-link">
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/productions">
              Production
            </Link>
          </li>
          <li className="nav-link">
            <Link href="/about">
              About
            </Link>
          </li>
          <li className="nav-link">
          <button className="form-toggle" onClick={formToggle}>
            Contact
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
