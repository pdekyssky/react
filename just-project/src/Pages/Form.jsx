import { useState } from "react"
import projectFirestore from "../firebase/config"

const Form = () => {

    const [movieTitle, setMovieTitle] = useState("")
    const [movieAge, setMovieAge] = useState("")
    const [movieLength, setMovieLength] = useState("")
   // console.log(movieTitle, movieAge, movieLength);

    const handleSubmit = async (e) => {
        e.preventDefault()  

        const newMovie = {
            title : movieTitle, 
            time : parseInt(movieLength), 
            age : parseInt(movieAge)
        }
        try  {
            await projectFirestore.collection("movies").add(newMovie)
            setMovieTitle("")
            setMovieAge("")
            setMovieLength("")
        } catch (err) {
            console.log(error.message)
        }
        
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Title"
                onChange={ (e) => setMovieTitle(e.target.value) }
                value={movieTitle}
                />
            <input 
                type="number" 
                placeholder="Minimal age" 
                min="10" 
                onChange={ (e) => setMovieAge(e.target.value) }
                value={movieAge}
                />
            <input 
                type="number" 
                placeholder="Movie length" 
                min="50" 
                onChange={ (e) => setMovieLength(e.target.value) }
                value={movieLength}
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