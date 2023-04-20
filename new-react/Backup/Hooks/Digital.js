import  React, { useState,useEffect} from "react";

const Digital = () => {
    let [ct,setCT]=useState(new Date().toLocaleTimeString());
 useEffect(() => {
    setInterval(() => {
        setCT(new Date().toLocaleTimeString());
    },[1000]);
    return() => {
        console.log("at tha unmounting time...");
    };

 },[]);
 return(
    <div>
        <h1>Digital clock</h1>
        <h3>Time :{ct}</h3>
    </div>
 );
};
export default Digital;