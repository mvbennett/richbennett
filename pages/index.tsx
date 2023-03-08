import { Inter } from '@next/font/google';
import Head from 'next/head';
import { createClient } from 'contentful';

import Latest from '../components/Latest';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })

  const res = await client.getEntries({ content_type: 'latestPost' });

  return {
    props: {
      latestPosts: res.items
    }
  }
}


export default function Home({ latestPosts }: any) {
  return (
    <>
      <Head>
        <title>Rich Bennett Recording Producer</title>
      </Head>
      <Latest latestPosts={latestPosts} />
    </>
  )
}
