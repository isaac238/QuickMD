import Head from 'next/head'
import Image from 'next/image'
import { Link, Footer } from './components'

export default function Home() {
  return (
    <>
    <Head>
        <title>QuickMD | Home</title>
        <meta name="description" content="A website to allow the easy correction of markdown docs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="text-white flex flex-col gap-2 justify-center items-center w-screen">
        <h1 className="w-fit text-3xl">Quick MD</h1>
        <section className="flex w-fit gap-2">
            <Link content="GitHub" icon="/image/githubWhite.png" link="https://github.com/isaac238/QuickMD"/>
            <Link content="New MD" backgroundColor="#009432"/>
        </section>
    </main>
    <Footer/>
    </>
  )
}