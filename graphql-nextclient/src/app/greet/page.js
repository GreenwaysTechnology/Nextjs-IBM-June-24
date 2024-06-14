import { gql } from "@apollo/client"
import { getClient } from "../lib/client"


const query = gql`query Greeting {
   hello
}`

export default async function GreetPage() {
    const { data: { hello } } = await getClient().query({ query });
    console.log(hello)
    return <div>
        <h1>Greeting From Apollo Server</h1>
        <h1>Got Message : { hello}</h1>
    </div>
}