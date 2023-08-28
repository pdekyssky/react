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

    if (action.type === "REMOVE_MOVIE") {
      const filteredMovies = state.movies.filter( (oneMovie) => {
        return oneMovie.id != action.payload
      })
      return {
        ...state, 
        movies : filteredMovies,
        showNotification: true,
        notificationContent : "Movie has been removed successfully"
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

  //STATES 
  const [movieName, setMovieName] = useState("")
  const [state, dispatch] = useReducer(reducer, defaultState)



 //SUBMIT BUTTON
  const submitForm = (e) => {
    e.preventDefault()

    if(movieName) {
      const newMovie = {id: Date.now(), name: movieName}
      //console.log(newMovie);
      dispatch({ type : "ADD_MOVIE", payload: newMovie})
      //setMovieName("");
    //  e.target.reset()
    } else {
      dispatch( { type: "NO_MOVIE_NAME" })
    }
    setMovieName("")
  }
 // CLOSE NOTIFICATION ABOUT MOVIE
  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" })
  }

  //REMOVE BUTTON
  const removeMovie = () => {
    dispatch({ type: "REMOVE_MOVIE", payload: movieId})
  }
  return ( <>

    <section>
      {state.showNotification && <Modal 
                                    notifContent={state.notificationContent}
                                    closeNotif={closeNotification}
      />}

      <form onSubmit={submitForm}>
        <input type="text" value={movieName}  onChange={ (e)=> setMovieName(e.target.value)  }/>
        <input type="submit" value="send" />
      </form>

      <div>
        {state.movies.map((oneMovie) => {
          return <div key={oneMovie.id}> 
            <h2>{oneMovie.name}</h2>
            <button onClick={ () => { dispatch( { type: "REMOVE_MOVIE" , payload: oneMovie.id})}}>Delete</button>
           </div>    
        }) 
        }
      </div>
    </section>
  </>
  )
}
export default App