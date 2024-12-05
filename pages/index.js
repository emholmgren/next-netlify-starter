import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kläder efter väder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Välkommen till Kläder efter väder" />
        <p className="description">
          We're just trying this out! :)
          Web app under construction ...
        </p>
      </main>

      <Footer />
    </div>
  )
}
