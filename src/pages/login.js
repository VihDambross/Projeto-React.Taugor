import React from 'react';
import "../CSS/login.css";
import logo from "../Imagens/logo-header.png";
import logologin from "../Imagens/logo-login.png";

import { Link } from 'react-router-dom';
 
function Login(){
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="logo-header" alt="logo" />
        <p className="titulo-header">Gestor de Ticket/Protocolo - PRT</p>
      </header>
      <main className="pagina-principal">
        <div className="pagina-login">
          <img src={logologin} className="logo-login" alt="logo" />
          <div>
              <form className="form-login">
              <label className="label-email" for="email">Email</label>
              <input className="email-login" type="text"></input>

              <label className="label-senha">Senha</label>
              <input className="senha-login" type="password"></input>

             <Link to="/Tickets" className="botao-login"><buttom value="enviar">Entrar</buttom></Link>
            </form>
          </div>
        </div>
        </main>
        </div>
    );   
}
export default Login;