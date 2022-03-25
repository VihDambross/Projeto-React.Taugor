import React from "react";
import "../CSS/listaTickets.css";

const Task = ({task}) => {
    return <div className="lista-tickets">
        {task.title}
    </div>
};

export default Task;