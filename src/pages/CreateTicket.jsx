import { Form, useNavigation, Link } from "react-router-dom";
import "../styles/createTicket.css";

function CreateTicket() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="create-ticket">
      <h1>Create New Ticket</h1>

      <Form method="post" className="ticket-form">
        <label>Title</label>
        <input type="text" name="title" placeholder="Enter title" required />

        <label>Description</label>
        <textarea
          name="description"
          rows="5"
          placeholder="Enter description"
          required
        />

        <label>Priority</label>
        <select name="priority" required>
          <option value="">Select Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label>Status</label>
        <select name="status" required>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        
        <div className="form-buttons">
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "creating..." : "Create Ticket"}
        </button>

        <Link to="/">
          <button type="button">Cancel</button>
        </Link>
        </div>
      </Form>
    </div>
  );
}

export default CreateTicket;
