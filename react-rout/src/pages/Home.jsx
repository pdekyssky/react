import { Link } from "react-router-dom"

const Home = () => {
  return (<>
  <ul>
     <li>Home</li>
    <li><Link to="/serials">Serials</Link></li>
    <li><Link to="/movies">Movies</Link></li>
    </ul>
  </>
   
  )
}

export default Home