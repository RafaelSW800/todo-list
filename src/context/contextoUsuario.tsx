import { createContext, useState } from 'react';

interface IcontextoUsuario {
    receitas: number[],
    despesas: number[],
    addReceita: (valor: number) => void,
    addDespesa: (valor: number) => void
}

const ContextoUsuario = createContext<IcontextoUsuario | undefined >(undefined);

const UsuarioProvider = ({ children }: any) => {
  const [receitas, setReceitas] = useState<number[]>([]);
  const [despesas, setDespesas] = useState<number[]>([]);

  const addReceita = (valor: number) => {
    setReceitas([...receitas, valor]);
  };

  const addDespesa = (valor: number) => {
    setDespesas([...despesas, valor]);
  };

  return (
    <ContextoUsuario.Provider value={{ receitas, despesas, addReceita, addDespesa }}>
      {children}
    </ContextoUsuario.Provider>
  );
};

export { UsuarioProvider, ContextoUsuario };
export type { IcontextoUsuario };
