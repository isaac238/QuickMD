import { FC } from 'react';
import Image from 'next/image'
interface linkProps {
    content: string;
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    icon?: any;
    link?: string;
}

export const Link: FC<linkProps> =
({
    content, disabled = false, borderColor = "#ffffff", link = "#",
    backgroundColor = "#222222", textColor = "#ffffff", icon = ""
} : linkProps)=> {

    const linkStyle = {
        background: backgroundColor,
        border: `${borderColor} solid .05rem`,
        color: textColor,
        padding: ".1rem",
        minWidth: "5rem"
    }

    if (icon !== "") {
        return (<>
            <a href={link} className="inline-flex justify-center items-center rounded" style={linkStyle}>
                <Image src={icon} alt="" height="50" width="50" />
                {content}
            </a>
        </>)
    } else {
        return (<>
            <a href={link} className="inline-flex justify-center items-center rounded" style={linkStyle}>
                {content}
            </a>
        </>)
    }
};

export const Footer: FC =
()=> {
    return (<>
    <footer className="flex flex-row text-white justify-center items-center text-xs font-thin p-2">
        <h1>Copyright &copy;isaac238 (2023)</h1>
    </footer>
        </>)
};
