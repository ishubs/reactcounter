import React from "react";
import Button from "./Button";
import "./CounterModal.scss"
import InputField from "./input";
export default function CounterModal({setShowModal}:any){
    return(
        <div id="CounterModal">
            <div id="modal-content">
            <div> <Button  title="close" onClick={()=>setShowModal(false)} className="closeBtn"/>
            </div>
                <h2>Let's Create your First Counter</h2>
            <InputField type="text" placeholder="Gym Days" />
            <InputField type="number" placeholder="Start at"/>
            </div>
        </div>
    )
}