import moviesContext from "./MoviesContext"
import { useContext } from "react"

const Movies = ({}) => {

  const {deleteMovie, movies} = useContext(moviesContext)


  return <>

    {movies.map( (oneMovie) => {
        const {id, name} = oneMovie

        return <div key={id}>
        
        <p>{name}</p>
        <button onClick={ () => deleteMovie(id) }>Delete</button>
        
        </div>
    }) }
  </>
   
  
}

export default Movies