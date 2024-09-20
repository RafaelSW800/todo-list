import React, { useContext, useEffect } from "react";
import { ContextoTema } from "../../context/contextTema";

const Sobre = () => {
    const tema = useContext(ContextoTema)

    useEffect(() => {
        console.log('tema sobre: ', tema)
    }, [tema])

    return (
        <div>
            <h1>Sobre o desenvolvedor</h1>
            <h2>Criado por Rafael em 2024.</h2>
            <h2>Atualmente atuando no mercado automotivo como consulto técnico na Hyundai.</h2>
            <h2>Já trabalhou como desenvolvedor full stack Laravel para uma empresa Home Office.</h2>
            <h2>Com 22 anos, espera que seja só o começo.</h2>
        </div>
    )
}

export default Sobre;