import "./App.css"
import { useState } from "react"

const App = () => {

  const [inputValue, setInputValue] = useState("")
  const [names, setNames] = useState([])
  console.log(names);
  const handleSubmit = (event) => {
    event.preventDefault()

      if (inputValue) {
        setNames( (names) => {
          return [...names, inputValue]
        })
      } else {
        console.log("No name");
      }
      setInputValue("")
  }

  return (
    <div>
      <form>
          <input 
            type="text"  
            placeholder="name" 
            className="userName"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <input 
            type="submit"  
            value="Submit" 
            onClick={handleSubmit}
          />
      </form>

      {names.map( (oneName, index) => {
        return <p className="item" key={index}>{oneName}</p>
       
      })}
    </div>
  )
}

export default App