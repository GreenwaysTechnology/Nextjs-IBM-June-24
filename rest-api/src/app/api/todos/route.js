import { NextResponse } from "next/server";


export async function GET(request) {
    //send Response
    return NextResponse.json([{
        id: 1,
        status: true,
        text: 'learn next '
    },
    {
        id: 2,
        status: false,
        text: 'learn react '
    }
    ])
}

//post
export async function POST(request) {
    //read body/payoad
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({ message: 'saved' })
}