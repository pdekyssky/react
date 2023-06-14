import "./OneMovieSlider.css"
import data from "../data"
import { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const OneMovieSlider = () =>{
    const [index, setIndex] = useState(2)
    const {image, title, description} = data[index]

    //previeousMovie movie

    const previeousMovie = () =>{
        setIndex( (index) => {
            const finalIndex = index - 1
           return indexMovie(finalIndex)
        })
    }

    //next movie

    const nextMovie = () => {
        setIndex( (index)=> {
           const finalIndex =  index + 1 
            return indexMovie(finalIndex)
        } )
    }

    const indexMovie = (index) => index < 0 ? data.length - 1 : index > data.length - 1 ? 0 : index   
    
    //if index is less than zero return length of data array else if index 
    // is more than data length 
     //set it on zero else do nothing

    return <div className="whole-card">
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="buttons">
        <button onClick={previeousMovie}>
            <FaArrowLeft />
        </button>
        <button onClick={nextMovie}>
            <FaArrowRight />
        </button>
        </div>
        
    </div>
}

export default OneMovieSlider