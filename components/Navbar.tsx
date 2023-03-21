import React from "react";
import Link from 'next/link';

import { useState } from "react";
import FormContainer from "./FormContainer";

import styles from '../styles/components/Navbar.module.css';

interface home {
  home: boolean;
}

const Navbar = ({ home }: home) => {
  const [formPopup, setFormPopup] = useState(false)
  const [visibility, setVisibility] = useState('closed')
  const handleClick = () => {
    if (visibility === 'closed') {
      setVisibility('open')
    } else if (visibility === 'open') {
      setVisibility('closed');
    }
  }
  const formToggle = () => {
    setFormPopup(!formPopup)
  }
  return (
    <div className={home ? `${styles.home}` : `${styles.secondary}`}>
      <div className={styles.titleBurger}>
        <Link href="/" className={styles.titleLink}>
          <h1 className={home ? `${styles.homeTitle} ${styles.title}` : `${styles.secondaryTitle} ${styles.title}`}>
            Rich Bennett
          </h1>
        </Link>
        <button type="button" className={styles.hamburger} onClick={handleClick}>
        <span className="material-symbols-outlined">
          {visibility === 'closed' ? 'menu' : 'close'}
        </span>
        </button>
      </div>
      <div className={styles.expand}>
        <ul className={`${home ? styles.homeLinks : styles.secondaryLinks} ${visibility === 'open' ? null : styles.collapse}`}>
          <li className={styles.link}>
            <Link href="/projects">
              Projects
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/productions">
              Production
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              About
            </Link>
          </li>
          {
            home ?
            <li className={styles.link}>
              <button className={styles.toggle} onClick={formToggle}>
                Contact
              </button>
            </li>
            :
            <></>
          }
        </ul>
      </div>
      {
        formPopup ?
        <div className={styles.popup}>
          <button className={styles.popupClose} onClick={formToggle}>
            x
          </button>
          <FormContainer />
        </div>
        :
        <></>
      }
    </div>
  );
};

export default Navbar;
