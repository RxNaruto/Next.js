import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        email:"naruto@konoha.com",
        name: "naruto"
    })
}

export async function POST(req: NextResponse){
    const body = await req.json();
    console.log(body);
    return NextResponse.json({
        msg: "you are signed in "
    })

}