import Head from 'next/head'
import GlobalStyle from '../styles/globalStyles'

import Navbar from '../components/navbar/Navbar'
import Hero from '../components/Hero'


import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Bart's Bass Gear</title>
        <meta name="description" content="Just a NextJS app to help teach styled components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      
      <Footer />
    </div>
  )
}
