"use client"
import { useState } from "react"
import axios from "axios";

export function Signup() {
    const [email,setemail]=useState("");
    const [password,setPassword]=useState("");
    return <div>
        <input onChange={(e)=>{
          setemail(e.target.value);
        }} type="text" placeholder="username"></input>
        <input onChange={(e)=>{
            setPassword(e.target.value);
        }} type="password" placeholder="password"></input>
        <button onClick={()=>{
            axios.post("http://localhost:3000/api/user",{
                email,
                password
            })
        }}>Signup</button>
    </div>
}