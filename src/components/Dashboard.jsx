import "../styles/dashboard.css";
import { useState } from "react";

function Dashboard({ tickets }) {
  const [search, setSearch] = useState("");
  const total = tickets.length;
  const todo = tickets.filter(t => t.status === "todo").length;
  const progress = tickets.filter(
    t => t.status === "in-progress"
  ).length;
  const done = tickets.filter(t => t.status === "done").length;

  return (
    <div className = "dashboard">  
      <div className = "dashboard-header">
         <div>
          <h1>Dashboard</h1>
          <p>Manage your project tasks efficiently.</p>
        </div>

        <input
          type="text"
          placeholder="🔍 Search tickets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </div>
    <div className="dashboard-content">
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
    </div>
  );
}

export default Dashboard;