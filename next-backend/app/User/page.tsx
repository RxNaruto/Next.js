"use client"
import { useEffect, useState } from "react"
import axios from "axios";
export default function Signup(){
    const [data,setData]=useState({
        email:"",
        name:""
    })
    useEffect(()=>{
        axios.get(" https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
        .then(response=>{
            setData(response.data);
        })
    },[])
    
    return(
        <div>
           {data.email}
           {data.name}
        </div>
    )
}