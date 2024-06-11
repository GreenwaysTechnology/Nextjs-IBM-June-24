import React, { Suspense } from "react"

//simulate delay using timers with promise
const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 8000, import('../components/greeter'))
    })
})

const Greeter = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/greeter'))
    })
})

export default function DashboardPage() {
    return <>
        <h1>Dashboard Header</h1>
        <Suspense fallback={<h1>Welcome is loading...</h1>}>
            <Welcome />
        </Suspense>
        <Suspense fallback={<h1>Greeter is loading...</h1>}>
            <Greeter />
        </Suspense>
        <h2>Dashboard Footer</h2>

    </>

}