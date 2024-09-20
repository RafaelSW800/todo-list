import React, { useState, useContext } from 'react';
import { ContextoTema } from "../context/contextTema";
import { ContextoUsuario } from "../context/contextoUsuario";
import { useUsuario } from '../hook/useUsuario';

const Receitas = () => {
  const tema = useContext(ContextoTema);
  const usuario = useUsuario();
  const [receita, setReceita] = useState(0);

  const handleAddReceita = (valor: number) => {
    setReceita(valor);
    usuario.addReceita(valor);
  };

  return (
    <div>
      <h2>Receitas</h2>
      <input type="number" value={receita} onChange={(e) => handleAddReceita(Number(e.target.value))} />
      <button onClick={() => handleAddReceita(receita)}>Adicionar Receita</button>
      <p>Total de Receitas: {usuario.receitas.reduce((acc: any, curr: any) => acc + curr, 0)}</p>
    </div>
  );
};

export default Receitas;