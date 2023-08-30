import moviesContext from "./MoviesContext"
import { useContext } from "react"

const Movies = ({data, deleteMovie}) => {

  const myData = useContext(moviesContext)
  console.log(myData)

  return <>

    {data.map( (oneMovie) => {
        const {id, name} = oneMovie

        return <div key={id}>
        
        <p>{name}</p>
        <button onClick={ () => deleteMovie(id) }>Delete</button>
        
        </div>
    }) }
  </>
   
  
}

export default Movies