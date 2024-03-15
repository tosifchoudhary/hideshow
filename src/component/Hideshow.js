import React from "react";
import { useState } from "react";
import "./hideshow.css"

function Hideshow(){
    let [status,setStatus]=useState(false)
    return(
        <>
      <div className="div">
        <div className="box">
            <div className="main">
                <input type={(status)?"text":"password"}></input>
                <button onClick={()=>setStatus(!status)}>{(status)?"hide":"show"}</button>
        
             </div>
        </div>

      </div>
    
        </>
    )
}
export default Hideshow