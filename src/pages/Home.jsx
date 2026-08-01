import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../services/api";
import "../styles/home.css";
import Loader from "../components/Loader";
import Board from "../components/Board";
import Dashboard from "../components/Dashboard";

function Home() {

  const {
    data: tickets = [],
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

      <Dashboard tickets={tickets} search={search} setSearch={setSearch} />

      <Board tickets={tickets} />
    </div>
  );
}

export default Home;