"use client";
import { useRouter } from "next/navigation"
import { signIn,signOut } from "next-auth/react";
export function Appbar(){
    const router=useRouter();
    return <div>
    <button onClick={()=>{
        signIn();
    }} >Signin</button>

<button onClick={()=>{
        signout();
    }} >LogOut</button>
    </div>
}