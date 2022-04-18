import React, {useState} from "react";
import "../CSS/addTicket.css";
import "../CSS/listaTickets.css";
import BotaoTicket from "./botaoTicket";

const AddTickets = ({handleAddTicket}) =>{
    const [inputData, setInputData] = useState('');
    const [inputData2, setInputData2] = useState('');
    const [inputData3, setInputData3] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTicketClick = () => {
        handleAddTicket(inputData);

    };

    const handleInputChange2 = (e2) => {
        setInputData2(e2.target.value);
    };

    const handleAddTicketClick2 = () => {
        handleAddTicket(inputData + " " + inputData2 + " " + inputData3);
        setInputData("");
        setInputData2("");
    };

    const handleInputChange3 = (e3) => {
        setInputData3(e3.target.value);
    };

    const handleAddTicketClick3 = () => {
        handleAddTicket(inputData3);
    };

    return (
        <div>
            <header>
                <h1>Criar Novo Ticket</h1>
            </header>
                <label className="titulo-ticket">Título:</label>
                <input onChange={handleInputChange}
                    value={inputData}
                    className="texto-ticket" 
                    type="text"
                />
                <label className="titulo-ticket">Descrição:</label>
                <input onChange={handleInputChange2}
                    value={inputData2}
                    className="texto-ticket" 
                    type="text"
                />
                <label className="titulo-ticket">Prioridade</label>
                <select onChange={handleInputChange3}
                    value={inputData3} className="texto-ticket">
                    <option className="texto-ticket" value="Prioridade Baixa" selected>Baixa</option>
                    <option className="texto-ticket" value="Prioridade Média">Média</option>
                    <option className="texto-ticket" value="Prioridade Alta">Alta</option>
                </select>
              <BotaoTicket onClick={handleAddTicketClick2}>Salvar</BotaoTicket>
        </div>
    );
}

export default AddTickets;