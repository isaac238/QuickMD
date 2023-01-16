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
            <main className="text-white flex flex-col gap-2 w-screen justify-center items-center">
                <section className="w-4/5 p-5 h-full bg-slate-800 bg-opacity-40 rounded-3xl shadow-2xl">
                <form className="h-full w-full flex flex-col">
                    <h1 className="text-3xl">Create MD</h1>
                    <label htmlFor="fileName" className="pb-3">
                        <span className="block text-xl">File Name</span>
                        <input className="w-10/12 h-10 rounded bg-slate-900 border-solid border-white border-2 pl-5 focus:outline-none" type="text" name="fileName" placeholder="Please enter a file name"/>
                        <span className="pl-3"><Button backgroundColor="#6c5ce7">Import</Button></span>
                    </label>
                    <section className="flex flex-row flex-wrap h-3/4 flex-1 mb-3">
                        <label htmlFor="mdContainer" className="w-1/2 h-full flex flex-col">
                            <span className="block text-xl">Edit Markdown</span>
                            <ul className="h-fit w-full bg-slate-900 border-white border-2 list-none space-x-1 p-1">
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'><b>B</b></Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'><u>U</u></Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'><i>I</i></Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'><s>S</s></Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'>H</Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'>&bull;</Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'>1.</Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'>&#x7b; &#x7d;</Button></li>
                                <li className="inline"><Button size="fit-content" padding=".5rem 1rem" backgroundColor='#6c5ce7'>&#x1F517;&#xFE0E;</Button></li>
                            </ul>
                            <textarea /*onChange={}*/ className="p-2 h-full w-full bg-slate-900 border-white border-2 focus:outline-none resize-none overflow-y-scroll text-white" />
                        </label>
                        <label htmlFor="mdContainer" className="w-1/2 flex flex-col">
                            <span className="block text-xl">View Markdown</span>
                            <textarea className="p-2 h-full w-full bg-slate-900 border-white border-2 focus:outline-none resize-none overflow-y-scroll prose text-white" disabled/>
                        </label>
                    </section>
                    <Button backgroundColor='#00b894'>Save</Button>
                </form>
                </section>
            </main>
            <Footer/>
            </>
            )
}
