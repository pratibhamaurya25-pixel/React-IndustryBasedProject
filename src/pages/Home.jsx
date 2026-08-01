import {useState} from "react";
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "../services/api";
import "../styles/home.css";
import Loader from "../components/Loader";
import Board from "../components/Board";
import Dashboard from "../components/Dashboard";

function Home() {
  
  const [search, setSearch] = useState("");

  const {
    data: tickets = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  const filteredTickets = tickets.filter((ticket) =>
    ticket.title.toLowerCase().includes(search.toLowerCase())
  );


  if (isLoading) {
    return <Loader />;
  }


  if (isError) {
    return <h2 className="error">{error.message}</h2>;
  }


  return (
    <div className="home">

      <Dashboard tickets={tickets} search={search} setSearch={setSearch} />

      <Board tickets={filteredTickets} />
    </div>
  );
}

export default Home;