import { useState, useEffect } from "react"

import "./App.css"


const App = () => {
  const [quote, setQuote] = useState("primary text")
  
  const url = "https://api.kanye.rest"

  

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)
  }


  useEffect( () => {
    getQuote()
  }, [])
 
 

  return (
    <div>
      <h1>{quote}</h1>
      <button onClick={() => getQuote()}>Get Quote</button>
    </div>
  )
}

export default App