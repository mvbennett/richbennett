import { Inter } from '@next/font/google'
import Head from 'next/head'

import Latest from '../components/Latest'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        {/* <meta property="og:title" content="Rich Bennett Recording Producer" key="title" /> */}
        <title>Rich Bennett Recording Producer</title>
      </Head>
      <Latest />
    </>
  )
}
