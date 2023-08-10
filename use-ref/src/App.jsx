import "./App.css"
import { useRef } from "react"

function App() {
  const refInput = useRef(null)
  const refHeading = useRef(null)
  const refAnchor = useRef(null)

  const formSubmit = (e) => {
    e.preventDefault()

    //console.log(refInput.current.style.backgroundColor = "red")
    //console.log(refInput.current.style.color = "white")
    //console.log(refHeading.current.style.color = "orange")
    //console.log(refHeading.current.textContent = "New text");
    console.log(refAnchor.current.textContent = "Haha")
  }


  return (<div>
    <h1 ref={refHeading}>Headin one</h1>
    <form onSubmit={formSubmit}>
      <input type="text" ref={refInput}></input><br />
      <input type="submit"></input>
    </form>
    <a href="https://www.google.com" ref={refAnchor}>Google</a>
    </div>
  )
}

export default App