import { useParams } from "react-router-dom"
import projectFirestore from "../firebase/config"
import { useState, useEffect } from "react"

const Onemovie = () => {
  
  const [data, setData] = useState( {} )
  const [error, setError] = useState("")

const {movieId}  = useParams()

useEffect( () => {
  projectFirestore.collection("movies").doc(movieId).get().then( (document) => {
    //console.log(document)

    if (document.exists) {
      setData(document.data())
    } else {
      setError("Sorry we couldn't find movie")
    }

  }).catch( (error) => {
    setError(error.message)
  })
}, [])  

  return (
    <div>
      <h1> {data.title} </h1>
      <p> age : {data.age} + </p>
      <p> time : {data.time} min </p>
    </div>
  )
}

export default Onemovie