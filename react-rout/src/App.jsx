import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Movies from "./pages/Movies"
import Serials from "./pages/Serials"
import Error from "./pages/Error"


const App = () => {
  return ( <BrowserRouter>
  <header>Header of webpage</header>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/serials" element={<Serials />} />
        <Route path="*" element={<Error />} />
    </Routes>
    <footer>Footer of webpage</footer>
  </BrowserRouter>
  )
}

export default App