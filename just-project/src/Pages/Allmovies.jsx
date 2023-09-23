import  projectFirestore  from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Allmovies = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState("")
  console.log(data);
  
  useEffect( () => {
    projectFirestore.collection("movies").get().then( (snapshot) => {
      //console.log(snapshot);

      if (snapshot.empty) {
        setError("Something went wrong")
      } else {
        let result = []
        snapshot.docs.forEach( (oneDoc) => {
         result.push( {id: oneDoc.id, ...oneDoc.data()})
        })
      setData(result)
      }
    } ).catch( (error) => {
      setError(error.message)
    })
  }, [] )

  return (
    <div>
      {error && <p>{error}</p>}
      {data.map( (oneMovie) => {
        return (
          <div key={oneMovie.id}>
            <h1>{oneMovie.title}</h1>
            <Link to={`/one-movie/${oneMovie.id}`}>More Info</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Allmovies