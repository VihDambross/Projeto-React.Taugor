import React, {useState} from "react";
import "../CSS/addTicket.css";
import BotaoTicket from "./botaoTicket";

const AddTickets = ({handleAddTicket}) =>{
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTicketClick = () => {
        handleAddTicket(inputData);
    }

    return (
        <div>
            <h1>Criar novo Ticket</h1>
            <input onChange={handleInputChange}
                value={inputData}
                className="texto-ticket" 
                type="text"
            />
              <BotaoTicket onClick={handleAddTicketClick}>Salvar</BotaoTicket>  
        </div>
    );
}

export default AddTickets;