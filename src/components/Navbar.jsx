import { NavLink } from "react-router-dom";
import "../styles/navbar.css"

function Navbar() {
  return(
  <nav>
    <div>
      <h1>Agile Issue Tracker</h1>
    </div>

    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/createticket">New Ticket</NavLink>
    </div>
  </nav>
)}

export default Navbar;