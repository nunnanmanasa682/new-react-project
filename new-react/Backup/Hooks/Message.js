import React,{useState} from 'react'
const Message=()=>{
    let [msg,setMsg]=useState("hello");

return (
    <div>
        <h1>Message Component:{msg}</h1>

    <button onClick={()=>{
        setMsg("Gm manasa")
    }
    }>GM</button>
    <button onClick={()=>{
        setMsg("Gn manasa") 
    }}>gn</button>
    </div>
)
}
export default Message
