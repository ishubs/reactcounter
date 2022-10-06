import React, { useEffect, useState } from "react";
import Button from "./Button";
import CounterModal from "./CounterModal";
import "./homepage.scss"
export default function Homepage(){
    type counterType = string | null;
    const [counters,setCounters] = useState(null)
    const [showModal,setShowModal] = useState(false)
    useEffect(()=>{
    setCounters(localStorage.getItem("counters")?JSON.parse(localStorage.getItem("counters")||''):null)
    })
    console.log(showModal)

    if(counters)
    return (
        <div>
            {}
        </div>
    )

    return(
        <>
        <div id="Maincontainer">
            <h1 id="mainTitle">You haven't added any Counters</h1>
            <div><Button title="Get Started" onClick={()=>setShowModal(true)} /></div>
        </div>
{showModal &&            <CounterModal setShowModal={setShowModal}/>}

        </>
    )
}