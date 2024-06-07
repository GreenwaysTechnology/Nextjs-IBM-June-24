import { NextResponse } from "next/server";

const data = [{
    id: 1,
    status: true,
    text: 'learn next '
},
{
    id: 2,
    status: false,
    text: 'learn react '
}
]

export async function GET(request, { params: { id } }) {
    //send Response
    const payload = data.filter(todo => todo.id === Number(id))
    if (payload.length === 0) {
        return NextResponse.json({ message: 'No Todo found' })
    }
    return NextResponse.json(payload)
}