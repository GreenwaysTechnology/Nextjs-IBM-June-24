
export default async function UserPage() {
    const url = 'http://localhost:3000/api/users'
    const response = await fetch(url)
    const users = await response.json()
   
    return <main className="flex  flex-col justify-between p-24">
        <h1>User Page</h1>
        <ul>
            {
                users.map(user => {
                    return <li key={user.id}>
                        <span>{user.name}</span>-<span>{user.id}</span>
                    </li>
                })
            }
        </ul>
    </main>
}