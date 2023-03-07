import FormButton from '@/components/FormButton'
import FormContainer from '@/components/FormContainer'
import { Inter } from '@next/font/google'
import Head from 'next/head'
import { createClient } from 'contentful';

import Latest from '../components/Latest'

const inter = Inter({ subsets: ['latin'] })

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

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
