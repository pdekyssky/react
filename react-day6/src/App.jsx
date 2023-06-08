import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  
  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect( () => {
    window.addEventListener("resize", sizeControl)
    console.log("useEffect");
    return () => {
      console.log("im cleanup");
      window.removeEventListener("resize", sizeControl)
    }
  })
  
  return (
    <div>
      <h1>Window Width</h1>
      <h2>{windowSize}</h2>
    </div>
  )
}
export default App