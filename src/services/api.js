const API_URL =
  "https://react-industrybasedproject-1.onrender.com/tickets";


export async function getTickets() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch tickets");
  }

  return response.json();
}


// DELETE ticket
export async function deleteTicket(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete ticket");
  }

  return response.json();
}


// UPDATE ticket
export async function updateTicket({ id, updatedTicket }) {
  const response = await fetch(`${API_URL}/${id}`, {
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


// CREATE ticket (for CreateTicket page)
export async function createTicket(ticket) {
  const response = await fetch(API_URL, {
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