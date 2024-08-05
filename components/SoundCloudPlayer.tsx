import React from "react";
import styles from '../styles/components/SoundCloudPlayer.module.css'

interface props {
  href: string;
  src: string;
  title: string;
}
const SoundCloudPlayer = ({title, src, href}: props) => {
  return (
    <div className={styles.main}>
      <div className={styles.player}>
        <iframe
          width="100%"
          height="600"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={src}
        >
        </iframe>
        <div className={styles.div}>
          <a
            href="https://soundcloud.com/richbennett12"
            title="acmehallrich"
            target="_blank"
            rel="noreferrer"
            className={styles.linkone}
          >
            acmehallrich
          </a>
          ·
          <a
            href={href}
            title={title}
            target="_blank"
            rel="noreferrer"
            className={styles.linktwo}
          >
            title
          </a>
        </div>
      </div>
    </div>
  )
}

export default SoundCloudPlayer;
