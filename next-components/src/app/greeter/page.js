import { Greeter } from "./Greeter";

export default function GreeterPage() {
    return <div>
        <h1>Page</h1>
        <hr />
        <Greeter message="Hello"/>
        <Greeter message="Hai"/>
        <Greeter message="welcome"/>
        <Greeter message="greet"/>
    </div>
}