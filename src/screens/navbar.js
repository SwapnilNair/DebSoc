import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ click }) => {
return (
<nav className="navbar">
    <div className="navbar__logo">
       <h2><a href ="https://en.wikipedia.org/wiki/Verghese_Kurien">DebSoc</a></h2>
    </div>

    <ul className="navbar__links">
      <li> <Link to="/" className = "links">Home</Link></li>
      <li> <Link to="/British" className = "links">AP</Link></li>
      <li> <Link to="/Asian" className = "links">BP</Link></li>
      <li> <Link to="/About" className = "links">Events</Link></li>
      <li> <Link to="/About" className = "links">About Us</Link></li>
      <li> <Link to="/Contact" className = "links">Contact </Link></li>
      <li> <Link to="/Contact" className = "links"></Link></li>
      {/*Dummy link to add spacing.*/}
    </ul>
    
</nav>
);
};
export default Navbar;