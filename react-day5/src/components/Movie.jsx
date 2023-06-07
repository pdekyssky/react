import "./Movie.css"
import data from "../data"
import DeleteBtn from "./DeleteBtn"
import AllDelBtn from "./AllDelBtn"
import ResetAll from "./ResetAll"
import { useState } from "react"

const Movie = () => {

    const [movieList, setMovieList] = useState(data)

    const deleteMovie = (id) => {
        const result = movieList.filter( (oneMovie) => {
            return oneMovie.id != id
        })
        setMovieList(result)
    }
    
    const deleteAllMovies = () => {
        setMovieList([])
    }

    const resetAllMovies = () => {
        setMovieList(data)
    }
    
    return (
        <section>
        <div className="all-movies">
           {
            movieList.map( (oneMovie) => {
                const {id, image, title, age, tags, description} = oneMovie

                return (
                    <div className="one-movie" key={id}>
                        <img src={image} />
                        <h2>{title}</h2>
                        <p>{age}</p>
                        <p>{tags}</p>
                        <p>{description}</p>
                        <DeleteBtn deleteMovie={() => deleteMovie(id)}/>
                    </div>
                )
            })
           }
        </div>
        <div className="last-buttons">
           <AllDelBtn 
                deleteAllMovies={deleteAllMovies}
           />
           <ResetAll 
                resetAllMovies={resetAllMovies}
           />
        </div>
        </section>
    )
}

export default Movie