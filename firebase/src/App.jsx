import { projectFirestore } from "./firebase/config"
import { useEffect, useState } from "react"
import "./App.css"

const App = () => {

const [data, setData] = useState( [] )
const [error, setError] = useState(false)
//console.log(data);

//useState for form 
const [movieName, setMovieName] = useState("")
const [movieAge, setMovieAge] = useState("")
const [movieLength, setMovieLength] = useState("")



useEffect( () => {
  const unsubscribe = projectFirestore.collection("movies").onSnapshot( (snapshot) => {
    /* if snapshot is empty 
        return error
        and set data on empty array 
       */
    if(snapshot.empty) {
      setError("Something went wrong try again later")
      setData([])
    } else {
      /** 
       *if snapshot is not empty enter docs and run forecch 
       for each run trough every document inside snapshot
       and result push to empty array so you can set that data using useState
       setting is as object 
       * **/
      let result = []
      snapshot.docs.forEach( (doc) => {
        result.push( { id: doc.id, ...doc.data()})
      })

      /** set result of snapshot for each to data so you can map tham later and render it on screen*
       * set error to false 
       */
      setData(result)
      setError(false)
    }
  }, error => { setError( error.message)}
  )
  /* this is callBack function which will unmount / detach listener onSnapshot
  btw whole projectfirestore returning function if i understand properly
  */
  return () => unsubscribe()
}, [])

/* handle delete take id as parameter
on button you add id as argument so program knows which button you clicked 
in handle delete function than you set that ID in .doc(id) so database will know which movie delete
*/

const handleDelete =(id) => {
  projectFirestore.collection("movies").doc(id).delete()
}


const handleSubmit = async (e) => {
  e.preventDefault()
 
  /* condition to make sure user do not add to database empty files */  
  if (movieName === "" || movieAge === "" || movieLength === "") {
    alert("Add Movie info / data please")
  } else {
    /*** Create Object which you put to database you can do it this way or if you in useStates use names like in database you can do it just with title, age, length *** */
  const newMovie = {title: movieName, age: movieAge, length: movieLength}
  /* after you add movie to database clear inputs this is first step with setsMovie, setAge ... next step is in input you have to make value = {} inside parnetes property will be Movie age number so 
  it will show actual value which is "" */
   try {
     await projectFirestore.collection("movies").add(newMovie)
     setMovieName("")
     setMovieAge("")
     setMovieLength("")
   } catch (err) {
     setError("No movies were added to database")
   }
  }

}


  return ( 
    <div className="all-movies"> 

      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          className="input"
          placeholder="movie name"
          onChange={(e) => setMovieName(e.target.value)}
          value={movieName}
          />
     

        <input 
          type="number" 
          className="input"
          placeholder="minimal age" 
          onChange={(e) => setMovieAge(e.target.value)}
          min="0" 
          value={movieAge}
        />

        <input 
          type="number"   
          className="input"
          placeholder="movie length" 
          onChange={(e) => setMovieLength(e.target.value)}
          min="0" 
          value={movieLength}
        />

        <input 
          type="submit" 
          value="Add movie" 
          />
          
      </form>

      {/* just render what you got*/}
       {/** if error is true render error message */}
      {error && <p>{error}</p>}
     
      {data.map( (oneMovie) => {
        {/* you can destructure oneMovie to items or you dont have to  */}
        const {id, title, length,age} = oneMovie

            return ( 
              <div key={id} className="one-movie">
                <h2>{title}</h2>
                <p>{length} mins</p>
                <p>{age} +</p>
                <button className="btn" onClick={() => handleDelete(id)}>Delete Movie</button>
              </div>
            )
      })}
    </div>
  )

}

export default App