import "./Example.css"
import { useState } from "react"

const Example = () => {
    //*console.log("TEST");
    const [title, setTitle] = useState("My first title")
    const [buttonText, setButtonText] = useState("BUTTON TEXT")
   

    const buttonHandler = () => {
        setTitle("My new title text")
        
    }
    const titleHandler = () => {
        setTitle("Title number 3")
    }
    const removeTitle = () => {
        setTitle("")
    }
    const buttonChange = () => {
        setButtonText("New BTN TEXT")
    }
    return(
        <div>
            <h1>{title}</h1>
            <button type="button" onClick={buttonHandler}>Change title</button>
            <button type="button" onClick={titleHandler}>Again change title</button>
            <button type="button" onClick={removeTitle}>Remove title</button>
            <button type="button" onClick={buttonChange}>{buttonText}</button>
        </div>
    )
}

export default Example