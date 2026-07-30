import Column from "./Column";
import "../styles/board.css";

function Board({ tickets }) {
  const todo = tickets.filter((ticket) => ticket.status === "todo");

  const inProgress = tickets.filter(
    (ticket) => ticket.status === "in-progress",
  );

  const done = tickets.filter((ticket) => ticket.status === "done");

  return (
    <div className="board">
      <Column title="To Do" tickets={todo} />

      <Column title="In Progress" tickets={inProgress} />

      <Column title="Done" tickets={done} />
    </div>
  );
}

export default Board;
