import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

// export async function GET(request) {
//     const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
//     revalidatePath(path)
//     console.log('revalidated', path)
//     return NextResponse.json({ revalidated: true, now: Date.now(), cache: 'no-store' })
// }

export async function GET(request) {
    const tags = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    revalidateTag(tags)
    console.log('revalidated', tags)
    return NextResponse.json({ revalidated: true, now: Date.now(), cache: 'no-store' })
}
