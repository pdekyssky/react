import React from 'react'
import data from "./Data"
import { useState } from 'react'
import "./App.css"

function App() {

  const [count, setCount] = useState(0)
  const [paragrapfs, setParagrapfs] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    const ammount = parseInt(count)
   setParagrapfs(data.slice(0, ammount)) 

  }


  return (
    <div>

    <h1>
       Lorem Ipsum Generator
    </h1>
   <form onSubmit={submitForm}>
    <label htmlFor='paragrapfs'>Paragrapfs: </label>
    <input type='number' id='paragrapfs' onChange={ (e) => setCount(e.target.value)}></input> <br/>
    <input type='submit' value="Generate"/>
   </form>
    
    <article>
      {paragrapfs.map( (oneParagraf, index) => {
        return <p key={index}>{oneParagraf}</p>
      })}
    </article>


    </div>
  )
}

export default App