import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../CSS/Tickets.css";
import Tasks from "../Components/criarTicket.js";
import AddTickets from "../Components/addTicket";

 
const Tickets = () => {
  const [tasks, setTasks] = useState([
    {
        id:"1",
       title: "Estudar",
        completed: false,
    },
    {
        id: "2",
        title: "Ler livros",
        completed: true,
    },
  ]);

  const handleAddTicket = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
    },
  ];

    setTasks(newTasks);
  };

  const handleTaskDeletion = (tasksId) => {
    const newTasks = tasks.filter(tasks => tasks.id !== tasksId);

    setTasks(newTasks);

  };

  return (
    <>
          <div className="novo-ticket">
              <AddTickets handleAddTicket={handleAddTicket}/>
              <Tasks
              tasks={tasks}
              handleTaskDeletion={handleTaskDeletion} 
              />
          </div>
    </>
  );
};

export default Tickets;