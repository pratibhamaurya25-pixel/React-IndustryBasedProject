import "../styles/ticket.css";

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>

      <p>{ticket.description}</p>

      <p>
        <strong>Priority:</strong> {ticket.priority}
      </p>
    </div>
  );
}

export default Ticket;
