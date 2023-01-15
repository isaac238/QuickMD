import Head from 'next/head'
import Image from 'next/image'
import {Header, Footer} from '../components/pageSections'
import {Button} from '../components/button'

export default function CreateMD() {
    return (
            <>
            <Head>
                <title>QuickMD | Create MD</title>
                <meta name="description" content="A website to allow the easy correction of markdown docs" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="text-white flex flex-col gap-2 p-5 w-screen">
            </main>
            <Footer/>
            </>
            )
}
