import "./App.css"
import data from "./Data"
import MovieBox from "./components/MovieBox"
import { useState } from "react"


const App = () => {

    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId) => {
        const newMovieList = movies.filter( (oneMovie)=> {
            return oneMovie.id !== movieId
        })
        setMovies(newMovieList)
    }

  return (
    <div><MovieBox 
    data ={movies}
    deleteMovie={deleteMovie}
    />
    </div>
  )
}

export default App