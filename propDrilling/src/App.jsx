import "./App.css"
import data from "./Data"
import MovieBox from "./components/MovieBox"
import { useState } from "react"
import moviesContext from "./components/MoviesContext"


const App = () => {


  //prop drilling 
  //useContext
  // totaly removed prop drilling
  //sending deletemovie funciton and movies as object and destructure it in movies 

    const [movies, setMovies] = useState(data)

    const deleteMovie = (movieId) => {
        const newMovieList = movies.filter( (oneMovie)=> {
            return oneMovie.id !== movieId
        })
        setMovies(newMovieList)
    }

  return (
    <moviesContext.Provider value= { {deleteMovie, movies}}> 
    <MovieBox />
    </moviesContext.Provider>
  )
}

export default App