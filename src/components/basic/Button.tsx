import React from 'react'
import { JsxEmit } from 'typescript'
import './button.scss'
interface buttonProps{
    title: string,
    onClick: any,
    className?:any
}

const Button : React.FC<buttonProps> = ({title,onClick,className}) : JSX.Element => {
    return(
        <button onClick={onClick} className={className}>{title}</button>
    )
}

export default Button