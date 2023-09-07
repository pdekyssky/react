import { Link } from "react-router-dom"

const Navbar = () => {
  return ( <nav>
    <Link to="/">Home</Link> <br/>
    <Link to="/movies">Movies</Link> <br/>
    <Link to="/serials">Serials</Link>
  </nav>
  )
}

export default Navbar