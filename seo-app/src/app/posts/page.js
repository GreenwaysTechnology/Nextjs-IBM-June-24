import Link from "next/link"

export const metadata= {
    title:'Post'
}
export async function fetchPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()
    return posts
}



export default async function PostPage(){
    const posts = await fetchPosts()

    return <h1>
         <ul>
            {
                posts.map(post=>{
                    return  <li>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </li>
                })
            }
         </ul>
    </h1>
}