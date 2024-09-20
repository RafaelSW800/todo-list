import React, { useContext, useEffect } from 'react';
import { ContextoTema } from "../../context/contextTema";
import { ContextoUsuario } from "../../context/contextoUsuario";
import Receitas from '../../components/Receitas';
import Despesas from '../../components/Despesas';
import { useUsuario } from '../../hook/useUsuario';

const Dashboard = () => {
  const tema = useContext(ContextoTema);
  const usuario = useUsuario();


  return (
    <div>
        <h1>Dashboard</h1>
        <Receitas />
        <Despesas />
        <p>Saldo: {usuario.receitas.reduce((acc: any, curr: any) => acc + curr, 0) - usuario.despesas.reduce((acc: any, curr: any) => acc + curr, 0)}</p>
    </div>
  );
};

export default Dashboard;