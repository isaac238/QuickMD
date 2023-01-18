import Head from 'next/head'
import {Header, Footer} from '../components/pageSections'
import {Button} from '../components/button'

export default function Home() {
  return (
    <>
    <Head>
        <title>QuickMD | Home</title>
        <meta name="description" content="A website to allow the easy correction of markdown docs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="text-white flex flex-col gap-2 justify-center items-center w-screen">
        <h1 className="w-fit text-6xl">Quick MD</h1>
        <section className="flex w-fit gap-2 text-4xl">
            <Button icon="/image/githubWhite.png" size="4" address="https://github.com/isaac238/QuickMD" minHeight='60px'>GitHub</Button>
            <Button backgroundColor="#009432" size="4" address='createmd' minHeight='60px'>New MD +</Button>
        </section>
    </main>
    <Footer/>
    </>
  )
}

