
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient
export function GET(req: NextRequest){
    return NextResponse.json({
        email: "goku@mail.com",
        name: "goku"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    try {
        await client.user.create({
            data:{
                email: body.email,
                password: body.password
            }
        })
       
        return NextResponse.json({
            body
        })
    } catch (e) {
        console.log(e);
        return NextResponse.json({
            message: "Error while signing up"
        },{
            status: 411
        })
        
    }
}