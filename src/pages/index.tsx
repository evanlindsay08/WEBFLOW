import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Steps from '@/components/Steps'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>WebFlow - Build Stunning Websites with AI</title>
        <meta name="description" content="Create beautiful, production-ready websites using AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Features />
        <Steps />
        <Footer />
      </main>
    </>
  )
} 