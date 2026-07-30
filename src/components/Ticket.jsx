import "../styles/ticket.css";

function Ticket({ ticket, onEdit, onDelete }) {
  return (
    <div className="ticket">

      <div>
        <div className="ticket-top">
          <h3>{ticket.title}</h3>

          <span className={`status ${ticket.status}`}>
            {ticket.status}
          </span>
        </div>

        <p>{ticket.description}</p>

        <p>
          <strong>Priority:</strong> {ticket.priority}
        </p>
      </div>


      <div className="ticket-actions">
        <button
          className="delete-btn"
          onClick={() => onDelete(ticket.id)}
        >
          Delete
        </button>

        <button
          className="edit-btn"
          onClick={() => onEdit(ticket)}
        >
          Edit
        </button>

      </div>

    </div>
  );
}

export default Ticket;