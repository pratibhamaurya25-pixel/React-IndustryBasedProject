const API_URL = "https://backend-py13.onrender.com";


// GET tickets
export async function getTickets() {
  const response = await fetch(`${API_URL}/tickets`);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return response.json();
}


// CREATE ticket
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


// DELETE ticket
export async function deleteTicket(id) {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete ticket");
  }

  return response.json();
}


// UPDATE ticket
export async function updateTicket({ id, updatedTicket }) {
  const response = await fetch(`${API_URL}/tickets/${id}`, {
    method: "PATCH",
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