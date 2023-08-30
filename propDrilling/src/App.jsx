import "./App.css"
import data from "./Data"
import MovieBox from "./components/MovieBox"
import { useState } from "react"
import moviesContext from "./components/MoviesContext"


const App = () => {


  //prop drilling 
  //useContext

    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId) => {
        const newMovieList = movies.filter( (oneMovie)=> {
            return oneMovie.id !== movieId
        })
        setMovies(newMovieList)
    }

  return (
    <moviesContext.Provider value="hey">
    <MovieBox 
    data ={movies}
    deleteMovie={deleteMovie}
    />
    </moviesContext.Provider>
  )
}

export default App