import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket, updateTicket } from "../services/api";
import Modal from "./Modal";
import Column from "./Column";
import "../styles/board.css";

function Board({ tickets }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });

  const [selectedTicket, setSelectedTicket] = useState(null);

  const todo = tickets.filter((ticket) => ticket.status === "todo");

  const inProgress = tickets.filter(
    (ticket) => ticket.status === "in-progress",
  );

  const done = tickets.filter((ticket) => ticket.status === "done");

  function handleEdit(ticket) {
    setSelectedTicket(ticket);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm("Delete this ticket?");

    if (confirmDelete) {
      deleteMutation.mutate(id);
    }
  }

  function handleUpdate(id, updatedTicket) {
    updateMutation.mutate({
      id,
      updatedTicket,
    });

    setSelectedTicket(null);
  }

  return (
    <>
      <div className="board">
        <Column
          title="To Do"
          tickets={todo}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Column
          title="In Progress"
          tickets={inProgress}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        <Column
          title="Done"
          tickets={done}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>

      {selectedTicket && (
        <Modal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onUpdate = {handleUpdate}
        />
      )}
    </>
  );
}

export default Board;
