import React, { useContext } from "react";
import { ContextoUsuario, IcontextoUsuario } from "../context/contextoUsuario";

export const useUsuario = () => {
    const context: IcontextoUsuario | undefined = useContext(ContextoUsuario)

    if (!context) { // verifica se o contexto é inválido (undefined)
        throw new Error('O hook useTodo só pode ser utilizado dentro do contexto TodoContext.')
    }

    return context
}