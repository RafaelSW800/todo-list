import React, { useContext, useState } from 'react';
import { ContextoTema } from "../../context/contextTema";

const Login = () => {
  const tema = useContext(ContextoTema);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Não verifica se os campos estão vazios, apenas prossegue
    console.log('Login realizado com sucesso!');
    // Redireciona para a página de home
    window.location.href = '/home';
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <br />
        <button onClick={handleLogin}>Prosseguir</button>
      </form>
    </div>
  );
};

export default Login;