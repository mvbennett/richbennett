import Head from "next/head";
import styles from '../styles/components/SoundCloudPlayer.module.css'
import SoundCloudPlayer from "@/components/SoundCloudPlayer";

export default function newsingle () {
  return (
    <>
      <Head>
        <title>
          New Roman Angelos Single
        </title>
      </Head>
      <div className={styles.main}>
        <SoundCloudPlayer
          title="Tropical Nites"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1886630076&color=%238fb8be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          href="https://soundcloud.com/richbennett12/roman-dj-set-sample"
        />
      </div>
    </>
  )
}

/* src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1886630076&color=%238fb8be&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" href="https://soundcloud.com/richbennett12/roman-dj-set-sample" */
