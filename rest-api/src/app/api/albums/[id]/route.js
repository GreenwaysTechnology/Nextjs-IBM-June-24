import { NextResponse } from "next/server"


//findById
const url = `https://jsonplaceholder.typicode.com/albums`

export async function GET(request, { params }) {
    try {
        const id = Number(params.id)
        const response = await fetch(`${url}/${id}`)
        const album = await response.json()
        if (album.id) {
            return NextResponse.json(album)
        }
        return NextResponse.json({ message: `Album for ${id} not Found` })
    }
    catch (err) {
        return NextResponse.json(err)
    }
}

//update Albubm by id

export async function PUT(request, { params }) {
    try {
        const id = Number(params.id)
        const { title } = await request.json()
        if (title) {
            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title })
            })
            const updatedAlbum = await response.json()
            return NextResponse.json(updatedAlbum)
        }
        return NextResponse.json({ message: `No value Found for ${id}` })

    }
    catch (err) {
        return NextResponse.json(err)
    }
}

//delete by id:

export async function DELETE(request, { params }) {
    try {
        const id = Number(params.id)
        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        const album = await response.json()
        return NextResponse.json(album)
    }
    catch (err) {
        return NextResponse.json(err)
    }

}