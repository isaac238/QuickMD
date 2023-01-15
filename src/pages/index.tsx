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
            <Button content="GitHub" icon="/image/githubWhite.png" address="https://github.com/isaac238/QuickMD"/>
            <Button content="New MD" backgroundColor="#009432" address='createmd'/>
        </section>
    </main>
    <Footer/>
    </>
  )
}

