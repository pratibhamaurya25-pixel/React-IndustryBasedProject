import Ticket from "./Ticket";
import "../styles/column.css";

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
