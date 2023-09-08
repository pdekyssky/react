import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Serials from "./pages/Serials"
import Error from "./pages/Error"
import Layout from "./pages/Layout"
import OneMovie from "./components/OneMovie"
import "./App.css"



const App = () => {
  return ( <BrowserRouter>
    <Routes>

          <Route path="/" element={ <Layout /> }>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serials" element={<Serials />} />

            {/*** /:movieID ist parameter  you can have more parameter like after movieID/:category ***/}
            <Route path="/all-movies/:movieID" element={<OneMovie />} />
            {/*** PARAMETERS IN REACT ROUTER DOM   ***/}
            
            <Route path="*" element={<Error />} />
          </Route>
     
    </Routes>
  </BrowserRouter>
  )
}

export default App