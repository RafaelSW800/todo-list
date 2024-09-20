import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Todo from "./pages/todo";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Login from "./pages/login";
import { ContextoTema } from "./context/contextTema";
import { ContextTodo } from "./context/contextTodo";
import { FirebaseContext } from './context/contextFirebase';
import { db, auth } from './firebaseConfig'
import {TodoService} from "./utils/TodoService";
import { Api } from "./utils/api/api";
import { UsuarioProvider } from "./context/contextoUsuario";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const api: Api = new Api(db, auth)
  
  const todoService = new TodoService()
  const renderizarBotoes = () => (
    <div className="App">
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Todo</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </div>
  );

  return (
    <ContextoTema.Provider value='dark'>
      <FirebaseContext.Provider value={{ api }}>
        <UsuarioProvider>
          <Router>
            {renderizarBotoes()}
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={
                <ContextTodo.Provider value={{ todoService }}>
                  <Todo />
                </ContextTodo.Provider>
              } />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
          </Router>
        </UsuarioProvider>
      </FirebaseContext.Provider>
    </ContextoTema.Provider>
  );
}

export default App;