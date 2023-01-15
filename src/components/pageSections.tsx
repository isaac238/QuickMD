import {Button} from '../components/button'

export const Header: FC = () => {
    return (<>
    <header className="flex flex-row text-white justify-center text-xl p-2">
        <Button content="Quick MD" backgroundColor="transparent" borderColor="transparent" address="/"/>
        <span className="ml-auto pr-4">
            <Button content="New MD +" backgroundColor="#009432" size="2rem" address='createmd'/>
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