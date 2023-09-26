import  projectFirestore  from "../firebase/config"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Allmovies.css"

const Allmovies = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState("")
  //console.log(data);
  
  useEffect( () => {
    const unsubscribe = projectFirestore.collection("movies").onSnapshot( (snapshot) => {
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
    }, (err) => {setError(err.message)} )

    return () => unsubscribe()
  }, [] )


  const handleDelete = (id) => {
   projectFirestore.collection("movies").doc(id).delete()
  }

  return (
    <div className="all-movies-sec">
      {error && <p>{error}</p>}
      {data.map( (oneMovie) => {
        return (
          <section >
          <div key={oneMovie.id} className="all-movies">
            <h1>{oneMovie.title}</h1>
            <Link to={`/one-movie/${oneMovie.id}`}>More Info</Link>
            <button onClick={ () => handleDelete(oneMovie.id)} className="delete-btn">Delete Movie</button>
          </div>
          </section>
        )
      })}
    </div>
  )
}

export default Allmovies