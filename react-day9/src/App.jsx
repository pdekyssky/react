import { useState, useEffect } from "react"
import Book from "./components/Book"
import "./App.css"

const App = () => {

  const [show, setShow] = useState(true)
  console.log(show);

  return (
    <div>
      <button onClick={() => setShow(!show)}>SHOW / HIDE</button>
        {
          show && <Book />
        }
    </div>
  )
}

export default App