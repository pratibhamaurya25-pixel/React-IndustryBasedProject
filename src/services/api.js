const API_URL = "https://jira-json-server.onrender.com";

export async function getTickets() {
  const response = await fetch(`${API_URL}/tickets`);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return response.json();
}

export async function createTicket(ticket) {
  const response = await fetch(`${API_URL}/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket),
  });

  if (!response.ok) {
    throw new Error("Failed to create ticket");
  }

  return response.json();
}

export async function deleteTicket(id) {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete ticket");
  }

  return response.json();
}

export async function updateTicket({ id, updatedTicket }) {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTicket),
  });

  if (!response.ok) {
    throw new Error("Failed to update ticket");
  }

  return response.json();
}