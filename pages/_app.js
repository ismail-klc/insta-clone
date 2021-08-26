import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import '../styles/style.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
        <link rel="icon" href="/img/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
