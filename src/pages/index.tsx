import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>TaxNirvana</title>
      </Head>
      <Hero />
      <Navbar/>
    </>
  )
}
