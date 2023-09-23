import { useState } from "react"
import projectFirestore from "../firebase/config"

const Form = () => {

    const [movieTitle, setMovieTitle] = useState("")
    const [movieAge, setMovieAge] = useState(null)
    const [movieLength, setMovieLength] = useState(null)
    console.log(movieTitle, movieAge, movieLength);

    const handleSubmit = (e) => {
        e.preventDefault()  
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title"
                onChange={ (e) => setMovieTitle(e.target.value) }
                />
            <input 
                type="number" 
                placeholder="Minimal age" 
                min="10" 
                onChange={ (e) => setMovieAge(e.target.value) }
                />
            <input 
                type="number" 
                placeholder="Movie length" 
                min="50" 
                onChange={ (e) => setMovieLength(e.target.value) }
                />
            <input 
                type="submit" 
                value="Add movie" 
                />
        </form>
    </div>
  )
}

export default Form