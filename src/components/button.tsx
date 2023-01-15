import { FC } from 'react';
import Image from 'next/image'

interface buttonProps {
    content: string;
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    icon?: string;
    address?: string;
    size?: string
}

export const Button: FC<buttonProps> =
({
    content, disabled = false, borderColor = "#ffffff", address = "#",
    backgroundColor = "#222222", textColor = "#ffffff", icon = "", size = "5rem"
} : buttonProps)=> {

    const buttonStyle = {
        background: backgroundColor,
        border: `${borderColor} solid .05rem`,
        color: textColor,
        padding: ".2rem",
        minWidth: size,
    }

    const isIcon = icon !== "";
    const resultContent = isIcon ?
    <><Image src={icon} alt="" height="50" width="50" />{content}</> :
    <>{content}</>;
    return (<>
    <a href={link} className="inline-flex justify-center items-center rounded gap-1" style={linkStyle}>
        {resultContent}
    </a>
    </>)
};
