import React from "react"
import Header from "./components/Header"
import Card from "./components/Card";
import Footer from "./components/Footer";
import defaultData from "./data";

export default function App() {
    const card = defaultData.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    });
    return (
        <div>
            <Header />
                <section>
                    {card}
                </section>
            <Footer />
        </div>
    )
}