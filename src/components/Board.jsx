import { useState, useCallback } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTicket, updateTicket } from "../services/api";
import Modal from "./Modal";
import Column from "./Column";
import "../styles/board.css";

function Board({ tickets = [] }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: deleteTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },

    onError: () => {
      alert("Unable to delete ticket.");
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTicket,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },

    onError: () => {
      alert("Unable to update ticket.");
    },
  });

  const moveMutation = useMutation({
    mutationFn: updateTicket,

    onMutate: async ({ id, updatedTicket }) => {
      await queryClient.cancelQueries({
        queryKey: ["tickets"],
      });

      const previousTickets = queryClient.getQueryData(["tickets"]) || [];

      queryClient.setQueryData(["tickets"], (oldTickets = []) =>
        oldTickets.map((ticket) =>
          ticket.id === id ? updatedTicket : ticket
        )
      );

      return { previousTickets };
    },

    onError: (error, variables, context) => {
      queryClient.setQueryData(
        ["tickets"],
        context?.previousTickets || []
      );
      alert("Failed to move ticket.");
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      });
    },
  });

  const [selectedTicket, setSelectedTicket] = useState(null);

  const todo = tickets.filter(
    (ticket) => ticket.status === "todo"
  );

  const inProgress = tickets.filter(
    (ticket) => ticket.status === "in-progress"
  );

  const done = tickets.filter(
    (ticket) => ticket.status === "done"
  );

  const handleEdit = useCallback((ticket) => {
    setSelectedTicket(ticket);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const confirmDelete = window.confirm("Delete this ticket?");

      if (confirmDelete) {
        deleteMutation.mutate(id);
      }
    },
    [deleteMutation]
  );

  const handleUpdate = useCallback(
    (id, updatedTicket) => {
      updateMutation.mutate({
        id,
        updatedTicket,
      });

      setSelectedTicket(null);
    },
    [updateMutation]
  );

  function getNextStatus(status) {
    switch (status) {
      case "todo":
        return "in-progress";
      case "in-progress":
        return "done";
      default:
        return "done";
    }
  }

  const handleMove = useCallback(
    (ticket) => {
      const updatedTicket = {
        ...ticket,
        status: getNextStatus(ticket.status),
      };

      moveMutation.mutate({
        id: ticket.id,
        updatedTicket,
      });
    },
    [moveMutation]
  );

  return (
    <>
      <div className="board">
        <Column
          title="To Do"
          tickets={todo}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMove={handleMove}
          isDeleting={deleteMutation.isPending}
          isUpdating={updateMutation.isPending}
          isMoving={moveMutation.isPending}
        />

        <Column
          title="In Progress"
          tickets={inProgress}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMove={handleMove}
          isDeleting={deleteMutation.isPending}
          isUpdating={updateMutation.isPending}
          isMoving={moveMutation.isPending}
        />

        <Column
          title="Done"
          tickets={done}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onMove={handleMove}
          isDeleting={deleteMutation.isPending}
          isUpdating={updateMutation.isPending}
          isMoving={moveMutation.isPending}
        />
      </div>

      {selectedTicket && (
        <Modal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  );
}

export default Board;