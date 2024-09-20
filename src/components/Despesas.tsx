import React, { useState, useContext } from 'react';
import { ContextoTema } from "../context/contextTema";
import { ContextoUsuario } from "../context/contextoUsuario";
import { useUsuario } from '../hook/useUsuario';

const Despesas = () => {
  const tema = useContext(ContextoTema);
  const usuario = useUsuario();
  const [despesa, setDespesa] = useState(0);
  

  const handleAddDespesa = (valor: number) => {
    setDespesa(valor);
    usuario.addDespesa(valor);
  };

  return (
    <div>
      <h2>Despesas</h2>
      <input type="number" value={despesa} onChange={(e) => handleAddDespesa(Number(e.target.value))} />
      <button onClick={() => handleAddDespesa(despesa)}>Adicionar Despesa</button>
      <p>Total de Despesas: {usuario.despesas.reduce((acc: any, curr: any) => acc + curr, 0)}</p>
    </div>
  );
};

export default Despesas;