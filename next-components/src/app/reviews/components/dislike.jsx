'use client'

import { useState } from "react"
import { Comments } from "./comments"

export const Dislike = ()=> {
 const [value,setValue]= useState(0)
 return <>
     <h1>Dislike-Client Component</h1>
      <h2>Value  {value}</h2>
      {/* Server component */}
      <Comments/>
 </>

}