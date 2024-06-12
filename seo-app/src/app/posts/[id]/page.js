
//dynamic meta data
export async function generateMetadata({ params, searchParams }, parent) {
  const id = Number(params.id)
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await response.json()

   //meta data object
   return {
      title:`${post.title} detail`,
      description:`${post.title}`
   }

}

export default function PostDetails(props) {

    return <h1>
        {JSON.stringify(props.params)}
    </h1>
}