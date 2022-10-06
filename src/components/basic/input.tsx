import React from "react";
import "./input.scss"

export default function InputField(props:any){
    const {type, placeholder} = props
    return(
        <input type={type} placeholder={placeholder}/>
    )
}