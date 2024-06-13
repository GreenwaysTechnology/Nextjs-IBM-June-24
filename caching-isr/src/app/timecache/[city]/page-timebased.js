

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()

//     return <>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </>
// }

// export default async function CachePage(props) {
//     //without caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })
//     const data = await response.json()

//     return <>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </>
// }

//with time based revalidation (clear cache)

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
//          {next: {revalidate:10} })
//     const data = await response.json()

//     return <>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </>
// }

export const revalidate = 5

// export default async function CachePage(props) {
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()

//     return <>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </>
// }

export default async function CachePage(props) {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
        { next: { revalidate: 10 } })
    const data = await response.json()

    return <>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </>
}