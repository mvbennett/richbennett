import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Workbox } from 'workbox-window'
import { useEffect } from 'react';

const isProduction = process.env.NODE_ENV === 'production'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (isProduction && 'serviceWorker' in navigator) {
      const wb = new Workbox('/service-worker.js')
      wb.register()
    }
  }, [])
  return <Component {...pageProps} />
}
