import "../styles/dashboard.css";

function Dashboard({ tickets }) {
  const total = tickets.length;
  const todo = tickets.filter(t => t.status === "todo").length;
  const progress = tickets.filter(
    t => t.status === "in-progress"
  ).length;
  const done = tickets.filter(t => t.status === "done").length;

  return (
    <div className="dashboard">
      <div className="card total">
        <h2>{total}</h2>
        <p>Total Tickets</p>
      </div>

      <div className="card todo">
        <h2>{todo}</h2>
        <p>To Do</p>
      </div>

      <div className="card progress">
        <h2>{progress}</h2>
        <p>In Progress</p>
      </div>

      <div className="card done">
        <h2>{done}</h2>
        <p>Done</p>
      </div>
    </div>
  );
}

export default Dashboard;