import React from "react";
import styles from '../styles/newsingle.module.css'

const BandCampPlayer = ({title, src, href}: {title: string, src: string, href: string}) => {
  return (
    <div className={styles.player}>
      <iframe
        width="100%"
        height="600"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        // src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1696369656&color=%238fb8be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
          // href="https://soundcloud.com/richbennett12/sets/new-roman-angelos-record"
          // title="Tropical Nites"
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
  )
}

export default BandCampPlayer;
