import React from "react";
import "../CSS/botaoTicket.css";

const BotaoTicket = ({children, onClick}) => (
    <button onClick={onClick} className="botao-ticket">
        {children}
    </button>
);

export default BotaoTicket;