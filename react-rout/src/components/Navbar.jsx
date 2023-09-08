import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return ( <header>
  {/*NavLink add on click active Class so i can make some magic with CSS*/}
  <nav>
    <NavLink to="/" className={ ({isActive}) => isActive ? "activeLink link" : "notActiveLink"}>Home</NavLink> 
    <NavLink to="/movies" className={ ({isActive}) => isActive ? "activeLink link" : "notActiveLink"}>Movies</NavLink> 
    <NavLink to="/serials" className={ ({isActive}) => isActive ? "activeLink link" : "notActiveLink"}>Serials</NavLink>
    </nav>
  </header>
  )
}

export default Navbar