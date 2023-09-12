import { projectFirestore } from "./firebase/config"
import { useEffect, useState } from "react"
import "./App.css"

const App = () => {

const [data, setData] = useState( [] )
const [error, setError] = useState(false)
//console.log(data);

//useState for form 


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
  


  return ( 
    <div className="all-movies"> 

      <form>

        <input 
          type="text" 
          placeholder="movie name"
          />
         <br />

        <input 
          type="number" 
          placeholder="minimal age" 
          min="30" 
        /><br />

        <input 
          type="number"   
          placeholder="movie length" 
          min="0" 
        /><br />

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
        const {id, title, length} = oneMovie

            return ( 
              <div key={id} className="one-movie">
                <h2>{title}</h2>
                <p>Movie length is {length} mins</p>
                <button className="btn" onClick={() => handleDelete(id)}>Delete Movie</button>
              </div>
            )
      })}
    </div>
  )

}

export default App