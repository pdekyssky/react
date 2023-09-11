import { projectFirestore } from "./firebase/config"
import { useEffect, useState } from "react"
import "./App.css"

const App = () => {

  const [data, setData] = useState( [] )
  const [error, setError] = useState("")

  useEffect( () => {
    projectFirestore.collection("movies").get().then( (snapshot) => {
      //console.log(snapshot);
      if (snapshot.empty) {
        setError("Something went wrong try again later")
      } else {
        let result = []
        snapshot.docs.forEach( (oneSnapshot) => {
          result.push( {id: oneSnapshot.id, ...oneSnapshot.data()})
        })
        //console.log(result);
        setData(result)
      }
    }).catch( (error) => {
      setError(error.message)
    })
  }, [] )


 return (
  <div className="all-movies">
    {
      error && <p>{error}</p>
    }
    {
      data.map( (oneMovie) => {
        const {id, title, length} = oneMovie
        return (
          <div key={id} className="one-movie">
            <h2>{title}</h2>
            <p>{length}</p>
          </div>
        )
      })
    }
  </div>
 )

}

export default App