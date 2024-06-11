import React from "react"

//simulate delay using timers with promise
const Welcome = React.lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 8000, import('./components/greeter'))
  })
})

export default function Home() {
  return <>
    <h1>Home</h1>
    <Welcome />
  </>
  
}