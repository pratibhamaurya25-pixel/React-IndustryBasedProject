import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getTickets, deleteTicket } from "../services/api";
import "../styles/home.css";
import Loader from "../components/Loader";
import Board from "../components/Board";
import { Link } from "react-router-dom";

function Home() {
  const queryClient = useQueryClient();

  const {
    data: tickets,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h2 className="error">{error.message}</h2>;
  }

  return (
    <div className="home">

      <Board tickets={tickets} />
    </div>
  );
}

export default Home;
