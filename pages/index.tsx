import { Inter } from '@next/font/google'

import Latest from './components/Latest'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Latest />
    </>
  )
}
