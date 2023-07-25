import Head from "next/head";
import styles from '../styles/newsingle.module.css'

export default function newsingle () {
  return (
    <>
      <Head>
        <title>
          New Roman Angelos Single
        </title>
      </Head>
      <div className={styles.main}>
        <div className={styles.player}>
          <iframe width="100%" height="600" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1655402857&color=%238fb8be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          <div className={styles.div}>
            <a href="https://soundcloud.com/richbennett12" title="acmehallrich" target="_blank" rel="noreferrer" className={styles.linkone}>
              acmehallrich
            </a>
            ·
            <a href="https://soundcloud.com/richbennett12/sets/new-roman-angelos-record" title="New Roman Angelos Record" target="_blank" rel="noreferrer" className={styles.linktwo}>
              New Roman Angelos Record
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
