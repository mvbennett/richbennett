import FormButton from '@/components/FormButton'
import FormContainer from '@/components/FormContainer'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { createClient } from 'contentful';

import Latest from '../components/Latest'

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
  console.log(latestPosts[0].fields.picture.fields.file.url);
  console.log(latestPosts[0].fields.title);
  console.log(latestPosts[0].fields.postContent.content[0].content[0].value);
  console.log(latestPosts[0].fields.postContent);



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
