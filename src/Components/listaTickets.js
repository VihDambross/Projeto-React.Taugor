import React from "react";
import "../CSS/listaTickets.css";
import "../CSS/addTicket.css";

const Task = ({task}) => {
    return <div className="lista-tickets">
        {task.title}
        <div className="botao-excluir">
            <button className="excluir-ticket">Excluir ticket</button>
        </div>
    </div>
};

export default Task;