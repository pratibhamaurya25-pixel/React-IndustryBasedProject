import Ticket from "./Ticket";
import "../styles/column.css";

function Column({ title, tickets,onEdit,onMove,onDelete }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      {tickets.map((ticket) => (
        <Ticket 
        key={ticket.id} 
        ticket={ticket} 
        onEdit={onEdit}
        onDelete = {onDelete}
        onMove={onMove} />
      ))}
    </div>
  );
}

export default Column;


