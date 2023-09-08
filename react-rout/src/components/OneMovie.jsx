import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"
import allMovies from "../Data"
import "./OneMovie.css"

const OneMovie = () => {

  const {movieID} = useParams()

  const targetedMovie = allMovies.find( (movie) => {
    return movie.id === parseInt(movieID)
  })
 // console.log(targetedMovie);

  const {image, title, description, tags} = targetedMovie

  return (
    <div className="one-movie-more">
    <h2>{title}</h2>
    <img src={image} />
    <p>{tags}</p>
    <p>{description}</p>
    <Link to="/movies">Back for MOVIES</Link>
    </div>
  )
}

export default OneMovie