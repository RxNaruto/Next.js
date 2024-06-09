"use client"

import axios from "axios";
import { useState } from "react"

export default function SignupComponent() {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    return (<div>

        <div>
            <input onChange={(e)=>{
                setEmail(e.target.value);
            }} type="text" placeholder="email" className="m-2"/><br />
            <input onChange={(e)=>{
                setPassword(e.target.value);
            }} type="password" placeholder="password" className="m-2" />
        </div>
        <div>
            <button onClick={async()=>{
                    try {
                        await axios.post("http://localhost:3000/api/user"),{
                            email,
                            password
                        }
                        
                    } catch (error) {
                        console.log(error);
                    }
                   
            
            }} className="m-2 bg-white text-black">Signup</button>
        </div>
    </div>
    )
}