import Head from 'next/head'
import {Header, Footer} from '../components/pageSections'
import {Button} from '../components/button'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import {ChangeEvent, useState, Fragment} from 'react'
import parse from 'html-react-parser'


async function parseMD(message: string) {
    const file = await unified().use(remarkParse).use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).process(message);
    let toChange = String(file);
    return toChange;
}


export default function CreateMD() {
    const [mdInput, setMdInput] = useState('');
    const [mdOutput, setMdOutput] = useState('');
    const [mdFileName, setMdFileName] = useState('');

    async function onMdInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
        setMdInput(event.target.value);
        setMdOutput(await parseMD(event.target.value));
           
    }

    const saveFile = () => {
        const file = new Blob([mdInput], {type: "md"});
        var a = document.createElement('a');
        a.href = URL.createObjectURL(file);
        a.download = `${mdFileName}.md`;
        a.click();
        a.remove();
        
    
    }

    const inputFile = async () => {
        const file = document.createElement('input');
        file.type = "file";
        file.className = "opacity-0 w-0 h-0";
        file.accept = ".md"
        file.click();
        file.addEventListener("change", async function(e) {  
            if (file.files != null) {
                setMdFileName(file.files[0].name.replace(/\.[^/.]+$/, ""));
                let fileContent = await file.files[0].text();
                console.log(String(fileContent));
                setMdInput(String(fileContent));
                setMdOutput(await parseMD(String(fileContent)));
            }
        });
    }

    const fileNameChange = (event: React.FormEvent<HTMLInputElement>) => {
        setMdFileName(event.currentTarget.value);
    }

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
                        <input onChange={fileNameChange} className="w-10/12 h-10 rounded bg-slate-900 border-solid border-white border-2 pl-5 focus:outline-none" type="text" name="fileName" placeholder="Please enter a file name" value={mdFileName}/>
                        <span className="pl-3" onClick={inputFile}><Button backgroundColor="#6c5ce7">Import</Button></span>
                    </label>
                    <section className="flex flex-row flex-wrap h-3/4 mb-3">
                        <label htmlFor="mdContainer" className="w-1/2 flex flex-col items-start h-full">
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
                            <textarea id="mdInput" name="mdInput" onChange={onMdInputChange} value={mdInput} className="p-2 h-full w-full bg-slate-900 border-white border-2 focus:outline-none resize-none overflow-y-scroll text-white" />
                        </label>
                        <label htmlFor="mdContainer" className="w-1/2 flex flex-col flex-grow flex-shrink-0 basis-0 items-start h-full">
                            <span className="block text-xl">View Markdown</span>
                            <div className="relative p-2 h-full w-full ">
                                <div className='block absolute overflow-y-scroll h-full w-full top-0 bottom-0 bg-slate-900 border-white border-2 focus:outline-none resize-none prose prose-invert text-white pl-3 pt-3'>
                                {parse(mdOutput)}
                                </div>
                            </div>
                        </label>
                    </section>
                    <span onClick={saveFile}>
                        <Button backgroundColor='#00b894'>Save</Button>
                    </span>
                </form>
                </section>
            </main>
            <Footer/>
            </>
            )
}
