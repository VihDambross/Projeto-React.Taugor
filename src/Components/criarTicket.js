import React from "react";
import Task from "../Components/listaTickets.js";

const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map ((tasks) => (
            <Task tasks = {tasks} />
            ))}
        </>
    );
};
export default Tasks;