

//write rest api which talks to database via prisma client

//import {prisma} from './src/lib/prisma'
import { prisma } from "@/lib/prisma"; //here default Import alise
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        if (!users) {
            return NextResponse.json({ message: 'No Users Found' })
        } else {
            return NextResponse.json(users)
        }

    }
    catch (err) {
        return NextResponse.json(err)
    }
}

export async function POST(request) {
    try {
        const user = await request.json()
        const response = await prisma.user.create({
            data: user
        })
        //
        return new NextResponse(JSON.stringify(response), {
            status: 201, headers: {
                "Content-Type": "application/json"
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}