import React from "react";
import "../CSS/listaTickets.css";
import "../CSS/addTicket.css";

const Task = ({tasks, handleTaskDeletion}) => {
    return <div className="lista-tickets" onClick={()=> handleTaskDeletion(tasks.id)}>
        {tasks.title}

        <div className="botao-excluir">
            <button className="excluir-ticket" 
            onClick={()=> handleTaskDeletion(tasks.id)}>
                Excluir ticket</button>
        </div>

    </div>
};

export default Task;