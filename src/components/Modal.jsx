import { useEffect, useRef, useState } from "react";
import "../styles/modal.css";

function Modal({ ticket, onClose, onUpdate }) {
  const [title, setTitle] = useState(ticket.title);
  const [description, setDescription] = useState(ticket.description);
  const [priority, setPriority] = useState(ticket.priority);
  const [status, setStatus] = useState(ticket.status);

  const titleRef = useRef(null);

  useEffect(() => {
    titleRef.current.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!ticket) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Edit Ticket</h2>

        <label>Title</label>

        <input
          ref={titleRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description</label>

        <textarea
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Priority</label>

        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <label>Status</label>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <div className="buttons">
          <button
            onClick={() =>
              onUpdate(ticket.id, {
                title,
                description,
                priority,
                status,
              })
            }>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
