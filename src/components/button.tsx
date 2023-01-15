import { Children, FC } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { isPropertySignature } from 'typescript';

interface buttonProps {
    disabled?: boolean;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
    icon?: string;
    address?: string;
    size?: string;
    padding? : string;
    children: React.ReactNode;
}

export const Button: FC<buttonProps> =
({
    children, disabled = false, borderColor = "#ffffff", address = "#", padding = ".1rem",
    backgroundColor = "#222222", textColor = "#ffffff", icon = "", size = "5rem"} : buttonProps)=> {

    const buttonStyle = {
        background: backgroundColor,
        border: `${borderColor} solid .05rem`,
        color: textColor,
        padding: padding,
        minWidth: size,
    }

    const isIcon = icon !== "";
    const resultContent = isIcon ?
    <><Image src={icon} alt="" height="50" width="50" />{children}</> :
    <>{children}</>;
    return (<>
        <Link href={address}>
            <span className="inline-flex justify-center items-center rounded gap-1" style={buttonStyle}>
            {resultContent}
            </span>
        </Link>
    </>)
};
