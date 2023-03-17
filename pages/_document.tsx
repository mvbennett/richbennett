import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  // const [theme, setTheme] = useState('light');
  // const toggleMode = () => {};
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap" />
        <meta name="description" content="Rich Bennett is a recording producer, mixer, and engineer as well as a composer and musician in his own right." />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#d1e1ea" />
        <link rel="apple-touch-icon" href="/logo-96x96.png" />
        <meta name="apple-mobile-web-app-status-bar" content="#90cdf4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
