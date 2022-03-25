import React from "react";
import Task from "../Components/listaTickets.js";

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map ((task) => (
            <Task task = {task} />
            ))}
        </>
    );
};
export default Tasks;