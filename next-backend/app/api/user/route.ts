import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const client = new PrismaClient();
export function GET(){
    return NextResponse.json({
        email:"naruto@konoha.com",
        name: "naruto"
    })
}

export async function POST(req: NextResponse){
    const body = await req.json();
    try{
        await client.user.create({
            data:{
                email: body.email,
                password: body.password
            }
        })
        console.log(body);
        return NextResponse.json({
            msg: "you are signed in "
        })
    }catch(e){
        return NextResponse.json({
            msg: "error while signup"
        },{status: 411})
    }

}