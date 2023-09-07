import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return ( <header>
  {/*NavLink add on click active Class so i can make some magic with CSS*/}
  <nav>
    <NavLink to="/">Home</NavLink> <br/>
    <NavLink to="/movies">Movies</NavLink> <br/>
    <NavLink to="/serials">Serials</NavLink>
    </nav>
  </header>
  )
}

export default Navbar