import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Allmovies from "./Pages/Allmovies"
import Onemovie from "./Pages/Onemovie"
import SharedLayout from "./Pages/SharedLayout"
import "./App.css"

const App = () => {
  return (
      <BrowserRouter>

          <Routes>

            <Route path="/" element={ <SharedLayout /> }>

              <Route index element={ <Home /> } />
              <Route path="all-movies" element={ <Allmovies /> } />
              <Route path="one-movie/:movieId" element={ <Onemovie /> } />

            </Route>

          </Routes>

      </BrowserRouter>
  )
}

export default App