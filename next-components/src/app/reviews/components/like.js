'use client'
import { useState } from "react"
export const Like = props => {
    const [value, setValue] = useState(0)

    const onLike = () => {
        setValue(value + 1)
    }
    return <>
        <h1>Like {value}</h1>
        <button onClick={onLike}>Like</button>
    </>
}