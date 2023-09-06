import { Link } from "react-router-dom"

const Serials = () => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Serials</li>
            <li><Link to="/movies">Movies</Link></li>
        </ul>
    </div>
  )
}

export default Serials