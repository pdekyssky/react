import { useState, useEffect } from "react";
import "./App.css"
import data from "./Data"
import categories from "./Categories";

const App = () => {

  const [typeOfMovie, setTypeOfMovie] = useState("romantic")

  const resultMovies = data.filter( (oneMovie) => {
    return oneMovie.category === typeOfMovie       ///filter/iterate cross eveery movie save it to oneMovie and return only if category === useState
  }) 
  console.log(resultMovies);

  return (
    <div>
      <h1>Test</h1>
      {
        resultMovies.map( (oneMovie) => {
          const {id, image, title, age, tags, description} = oneMovie

          return (
            <div className="movies">
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
  )
}

export default App