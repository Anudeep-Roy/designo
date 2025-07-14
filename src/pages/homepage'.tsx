import Header from "@/components/header"

export default function Homepage() {
    return (
        <div className="container">
            <Header />
            <h1>The quick brown fox jumps over the lazy dog</h1>
            <h2>Hello World</h2>
            <h3>Hello World</h3>
            <p>Hello World</p>
            <button className="primary">Click</button>
            <button className="light">Click</button>
        </div>
    )
}