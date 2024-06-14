import { ApolloServer } from "@apollo/server"
import {startStandaloneServer} from '@apollo/server/standalone'
//schema definition
const typeDefs = `
 type Query {
    hello:String
 }
`
//resolver : write api implementation
const resolvers = {
    //curd operations
    Query: {
        hello() {
            return "Hello Graphql"
        }
    }
}
//create apolloServer
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})
//Web container to deploy graphql server
const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
})
console.log('Apollo Server is Ready!')

