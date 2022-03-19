import React from "react";
import "../CSS/Tickets.css";
 
function Tickets(){
    return (
        <div className="pagina-tickets">
      <header className="header-tickets">
      <h1 className="titulo-pagina">Biblioteca de Tickets</h1>
    </header>
    <form className="form-tickets">
      <label className="novo-ticket">Criar novo Ticket</label>
      <label className="titulo-ticket">Título:</label>
      <input  className="texto-ticket" type="text"></input>
      <label className="titulo-ticket">Descrição:</label>
      <input className="texto-ticket" type="text"></input>
      <label className="titulo-ticket">Prioridade:</label>
      <select className="texto-ticket" name="select">

        <option value="valor1">Baixa</option>
        <option value="valor2" selected>Média</option>
        <option value="valor3">Alta</option>
      </select>
      <button className="botao-tickets" name="button">Salvar</button>
    </form>
    </div>
    )   
}
 
export default Tickets;