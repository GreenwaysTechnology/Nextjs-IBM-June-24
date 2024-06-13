// export default async function CachePage(props) {
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()

//     return <>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </>
// }

export default async function CachePage(props) {
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
        {
            next: {
                tags: ['timerTag']
            }
        })
    const data = await response.json()

    return <>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </>
}

//SSG 
export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}