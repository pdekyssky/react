import allMovies from "../Data"
import { Link } from "react-router-dom"
import "./Movies.css"

const Movies = () => {
  return ( <section>
  
   <h1>Movies</h1>
    <div className="all-movies">
   {allMovies.map( (oneMovie) => {
      return (
        <div key={oneMovie.id} className="one-movie">
          <h2>{oneMovie.title}</h2>
          <img src={oneMovie.image} />
          <Link to={`/all-movies/${oneMovie.id}`}>More info</Link>

          </div>
      )
   })}
   </div>
    </section>
  )
}

export default Movies