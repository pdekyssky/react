import data from "./data"
import {useState, useEffect} from "react"
import "./App.css"


const App = () => {

  const [searchText, setSearchText] = useState("")
  console.log(searchText);
  const [filterMovies, setFilterMovies] = useState([])


  /** filter all movies data 
   * useEffect renders / run at the end of the component
   * return only movies that includes search text
   * setFilterMovies via useState hook to filterMovies so i can render them later in return
   *  * */
  useEffect( () => {
    const filteredMovies = data.filter( (oneMovie) => {
      return oneMovie.title.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilterMovies(filteredMovies)
  }, [searchText])
  /*searchText is dependencz its mean it will start useEffect when searchText will chang*/

  return <div className="movies-box">
  {/**take value of input save it via setSearchText into searchText**/}
  <form>
    <input placeholder="search for movie" onChange={(e)=>setSearchText(e.target.value)}></input>
  </form>
    <div className="all-movies">
    {/*data.map i have change for filterMovies because i want to render only movies which has been filtered before*/}
      {filterMovies.map( (oneMovie) =>{
         const {id, image, title, age, tags, description} = oneMovie
         return <div key={id} className="one-movie">
          <img src={image}></img>
          <h2>{title}</h2>
          <p>{age}</p>
          <p>{tags}</p>
          <p>{description}</p> 
         </div>
      } )}
    </div>
  </div>



}

export default App