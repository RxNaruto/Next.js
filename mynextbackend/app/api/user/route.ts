import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        email: "goku@mail.com",
        name: "goku"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json();
    console.log(body);
    console.log(req.headers.get("authorization"));
    console.log(req.nextUrl.searchParams.get("id"));
    return NextResponse.json({
        message: "You are signed in"
    })
}