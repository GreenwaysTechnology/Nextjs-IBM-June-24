import FetchPost from "./components/FetchPost"
import FetchPostUsingSWR from './components/PostClientUsingSWR'

export default function PostPage() {
  return <>
    {/* <FetchPost/> */}
    <FetchPostUsingSWR />
  </>
}