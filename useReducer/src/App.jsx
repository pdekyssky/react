import Modal from "./components/Modal"
import data from "./Data"
import { useState, useReducer } from "react"

const reducer = (state, action) => {
    if (action.type === "ADD_MOVIE") {
      const movie = [...state.movies, action.payload]
      // console.log(movie);
      return {
        ...state,
        movies : movie,
        showNotification : true,
        notificationContent : "Movie has been added successfully"
      }
    }

    if (action.type === "NO_MOVIE_NAME") {
      return {
        ...state,
        showNotification : true,
        notificationContent : "Please enter a movie name"
      }
    }

    if (action.type === "CLOSE_NOTIFICATION") {
      return {
      ...state,
        showNotification : false,
        notificationContent : ""
      }
    }
   
  return new Error("No match with the action type")
}
const defaultState = {
  movies: [],
  showNotification: false,
  notificationContent: "",
}

const App = () => {

  //const [movies, setMovies] = useState(data)
  //const [showNotification, setShowNotification] = useState(false)
  const [movieName, setMovieName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)

  const submitForm = (e) => {
    e.preventDefault()

    if(movieName) {
      const newMovie = {id: Date.now(), name: movieName}
      dispatch({ type : "ADD_MOVIE", payload: newMovie})
    } else {
      dispatch( { type: "NO_MOVIE_NAME" })
    }
  }

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" })
  }

  return ( <>

    <section>
      {state.showNotification && <Modal 
                                    notifContent={state.notificationContent}
                                    closeNotif={closeNotification}
      />}

      <form onSubmit={submitForm}>
        <input type="text" onChange={ (e)=> setMovieName(e.target.value) }/>
        <input type="submit" value="send" />
      </form>

      <div>
        {state.movies.map((oneMovie) => {
          return <div key={oneMovie.id}> 
            <h2>{oneMovie.name}</h2>
           </div>    
        }) 
        }
      </div>
    </section>
  </>
  )
}
export default App