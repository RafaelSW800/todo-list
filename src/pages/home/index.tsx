import React, { useContext, useEffect } from "react";
import { ContextoTema } from "../../context/contextTema";

const Home = () => {
    const tema = useContext(ContextoTema)

    useEffect(() => {
        console.log('tema home: ', tema)
    }, [tema])

    return (
        <div>
            <h1>Home</h1>
            <h2>Um sistema voltado a amostragem de dados onde nada se perde</h2>
        </div>
    )
}

export default Home;