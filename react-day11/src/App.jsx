import { useState, useEffect } from "react";
import "./App.css"
import Question from "./components/Question";
import questions from "./data";

const App = ()=> {
  return (
    <div>
      {
        questions.map( (oneQuestion)=> {
          return <Question 
          key={oneQuestion.id}
          {...oneQuestion} //return rest of parameters 
          />
        })
      }
    </div>
  )
}

export default App