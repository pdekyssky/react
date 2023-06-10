import "./App.css"
import Movie from "./components/Movie"
import allMovies from "./data"
import { useState } from "react"
import categories from "./categories"

const App = () => {
  return (
    <div> 
      <Movie />
    </div>
  )
}
export default App