import React from "react";
import "../styles/ticket.css";

function Ticket({ ticket, onEdit,onMove,onDelete }) {
  return (
    <div className="ticket">
      <div>
        <div className="ticket-top">
          <h3>{ticket.title}</h3>

          <span className={`status ${ticket.status}`}>{ticket.status}</span>
        </div>

        <p>{ticket.description}</p>

        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>
      </div>

      <div className="ticket-actions">
        <button className="delete-btn" onClick={() => onDelete(ticket.id)}>
          Delete
        </button>

        <button className="edit-btn" onClick={() => onEdit(ticket)}>
          Edit
        </button>

        <button className="move-btn" onClick={() => onMove(ticket)}>
          Move →
        </button>
      </div>
    </div>
  );
}

export default React.memo(Ticket);
