import { useState, useEffect } from "react";
import "./App.css"
import data from "./Data"
import categories from "./Categories";

const App = () => {

  const [typeOfMovie, setTypeOfMovie] = useState("all")
  const [filteredMovie, setFilteredMovie] = useState([])

  useEffect( ()=> {
    if(typeOfMovie === "all") {
      setFilteredMovie(data)
    } else {
        const resultMovies = data.filter( (oneMovie) => {
        return oneMovie.category === typeOfMovie  
        
        ///filter/iterate cross eveery movie save it to oneMovie and return only if category === useState
      }) 
      setFilteredMovie(resultMovies)

    }
  },[typeOfMovie])


  return (
    <div>
      <div className="buttons">
        {
          categories.map( (one, index) => {
          return <button onClick={() => setTypeOfMovie(one)} key={index}>{one}</button>    // set type of movie on movie list which i clicked 
        })
      }
      <button onClick={() => setFilteredMovie(data)}>All Movies</button>
      </div>
    <div>
      {
        filteredMovie.map( (oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return (
            <div className="movies" key={id}>
              <img src={image} />
              <h2>{title}</h2>
              <p>{age}</p>
              <p>{tags}</p>
              <p>{description}</p>
            </div>
          )
        })
      }
    </div>

    </div>
  )
}

export default App