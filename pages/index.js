import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Test Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Trying out Netlify!" />
        <p className="description">
          Web app under construction ...
        </p>
      </main>

      <Footer />
    </div>
  )
}
