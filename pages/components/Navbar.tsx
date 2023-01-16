import React from "react";
import Link from 'next/link';


interface page {
  page: string;
}

const Navbar = ({ page }:page) => {
  return (
    <div className={`${page}-navbar`}>
      <Link href="/" className="nav-title-link">
        <h1 className={`${page}-nav-title nav-title`}>
          Rich Bennett
        </h1>
      </Link>
      <button type="button" className="hamburger">
        <span className="material-icons">
          menu
        </span>
      </button>
      <div className="navbar-collapse">
        <ul className={`${page}-nav-links collapse`}>
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

/* <span class="material-icons">
close
</span> */
