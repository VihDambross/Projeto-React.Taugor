import React, { useState } from "react";
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
        id: Math.random(10),
        completed: false,
    },
  ];

    setTasks(newTasks);
  };
  return (
    <>
          <div className="novo-ticket">
              <AddTickets handleAddTicket={handleAddTicket}/>
              <Tasks tasks={tasks}/>
          </div>
    </>
  );
};

export default Tickets;