import React from 'react'
import data from "./Data"
import { useState } from 'react'
import "./App.css"

function App() {


  const submitForm = (e) => {
    e.preventDefault()
    console.log("form sended")
  }


  return (
    <div>

    <h1>
       Lorem Ipsum Generator
    </h1>
   <form onSubmit={submitForm}>
    <label htmlFor='paragrapfs'>Paragrapfs: </label>
    <input type='number' id='paragrapfs'></input> <br/>
    <input type='submit' value="Generate"/>
   </form>
    
    </div>
  )
}

export default App