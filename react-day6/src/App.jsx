import { useState, useEffect } from "react"

const App = () => {
 
  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)

  useEffect( () => {
    const button = document.querySelector(".btn")
    if (value >= 1) {
      button.textContent = `Click number ${value}`
    } else {
      button.textContent = "Click please"
    }
   console.log("first useEffect");
  }, [value] )

  useEffect( () => {
    document.title = `New title ${test}`
    console.log("second useEffect");
  }, [test])
  
  return (
    <div>
      <h1>TEST</h1>
      <p>{value}</p>
      <button className="btn" onClick={ () => setValue(value + 1) }>Klik</button>

      <button className="btn-test" onClick={ () => setTest(test +1)}>Title</button>
    </div>
  )
}
export default App