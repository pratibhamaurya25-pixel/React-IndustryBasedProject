import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../services/api";
import "../styles/home.css";
import Loader from "../components/Loader"
import Board from "../components/Board"

function Home() {
  const {
    data: tickets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2 className="error">{error.message}</h2>;
  }

  return (
    <div className="home">
      <h1 className="heading">Agile Issue Tracker</h1>

      {/* <div className="ticket-container">
        {tickets.map((ticket) => (
          <div className="ticket-card" key={ticket.id}>
            <div className="ticket-header">
              <h3>{ticket.title}</h3>
              <span className={`status ${ticket.status}`}>
                {ticket.status}
              </span>
            </div>

            <p className="description">{ticket.description}</p>

            <div className="ticket-footer">
              <span>
                <strong>Priority:</strong> {ticket.priority}
              </span>

              <span>
                <strong>ID:</strong> #{ticket.id}
              </span>
            </div>
          </div>
        ))}
      </div> */}

      <Board tickets={tickets} />
    </div>
  );
}

export default Home;