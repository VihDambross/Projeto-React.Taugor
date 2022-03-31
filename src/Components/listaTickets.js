import React from "react";
import "../CSS/listaTickets.css";
import "../CSS/addTicket.css";

const Task = ({task}) => {
    return <div className="lista-tickets">
        {task.title}
    </div>
};

export default Task;