import Link from "next/link";


export async function fetchPhotos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos')
        const photos = await response.json()
        return photos;
    }
    catch (err) {

    }
}


export default async function PhotoPage() {
    const photos = await fetchPhotos();
    return <>
        <h1>Photo Page</h1>
        <ul>
            {
                photos.map(photo => {
                    return <li>
                        <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
                    </li>
                })
            }
        </ul>
    </>
}