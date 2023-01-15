import {Button} from '../components/button'
import { FC } from 'react';

export const Header: FC = () => {
    return (<>
    <header className="flex flex-row text-white items-center text-xl p-2">
        <Button backgroundColor="transparent" borderColor="transparent" address="/">Quick MD</Button>
        <span className="ml-auto pr-4">
            <Button backgroundColor="#009432" size="2rem" address='createmd'>New MD +</Button>
        </span>
    </header>
    </>)
}

export const Footer: FC = ()=> {
    return (<>
    <footer className="flex flex-row text-white justify-center items-center text-xl font-thin p-2">
        <h1>Copyright &copy;isaac238 (2023)</h1>
    </footer>
    </>)
};
