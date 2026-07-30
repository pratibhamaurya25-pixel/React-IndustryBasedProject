
import React from "react";
import Ticket from "./Ticket";
import "../styles/column.css";

function Column({ title, tickets, onEdit, onDelete, onMove }) {

  return (
    <div className="column">

      <h2 className={`column-title ${title.replace(" ", "-").toLowerCase()}`}>
        {title}
      </h2>

      <div className="ticket-container">
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            onEdit={onEdit}
            onDelete={onDelete}
            onMove={onMove}
          />
        ))}
      </div>

    </div>
  );
}

export default React.memo(Column);