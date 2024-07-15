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
          <iframe
            width="100%"
            height="600"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1855938405&color=%238fb8be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">
          </iframe>
          <div className={styles.div}>
            <a
              href="https://soundcloud.com/richbennett12"
              className={styles.linkone}
              title="acmehallrich"
              target="_blank"
              rel="noreferrer"
            >
            acmehallrich
            </a>
            ·
            <a
              className={styles.linktwo}
              href="https://soundcloud.com/richbennett12/roman-dj-set-sample"
              title="Roman DJ set sample"
              target="_blank"
              rel="noreferrer"
            >
              Roman DJ set sample
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
