import "./App.css"
import { useState } from "react"
import DecreaseBtn from "./components/DecreaseBtn"
import IncreaseBtn from "./components/IncreaseBtn"
import ResetBtn from "./components/ResetBtn"

const App = () => {

  const [value, setValue] = useState(0)

  const decrease = () => {
    //const newValue = value -1                               create DECREASE -1 and send it as props to 
                                                                                //its own component
    setValue(value - 1)
  }

  const increase = () => {
   // const newValue = value +1                create INCREASE +1 and send it as props to 
                                                                    //its own component
    setValue(value + 1)
  }

  const reset = () => {
    //const newValue = 0
    setValue(0)
  }

  return (
    <div>
    <h1>TEST</h1>
    <h2>{value}</h2>
    <DecreaseBtn decrease={decrease}/>
    <IncreaseBtn increase={increase}/> 
    <ResetBtn reset={reset}/>
        </div>
  )
}

export default App