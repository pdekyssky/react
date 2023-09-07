import { Link, Outlet } from "react-router-dom"

const Movies = () => {
  return ( <>
    <ul>
       <li><Link to="/">Home</Link></li>
      <li><Link to="/serials">Serials</Link></li>
      <li><Outlet></Outlet></li>
      </ul>
    </>
  )
}

export default Movies