import "./App.css"
import { useState } from "react"

//spread operator

// join arrays together

//const studentsGroup = ["Peter", "Tomas", "David"]
//const allStundets = ["Harry", "Ron", ...studentsGroup, "Hermiona"]

//console.log(allStundets);

//function arguments
//const number = [1, 2, 3]
//const multipleNumbers = (a, b, c) => {
  //console.log(a* b* c);
//}
//multipleNumbers(...number)


//rest operator 

//const sum = (...allNumbers) => {
 // let result = 0
  //for (const oneNumber of allNumbers) {
    //result += oneNumber
  //}
  //return result
 
//} 

console.log(sum(1,2,15,10));


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