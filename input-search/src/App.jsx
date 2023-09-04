import data from "./data"
import {useState, useEffect} from "react"


const App = () => {

  const [searchText, setSearchText] = useState("")
  console.log(searchText);

  return <>
  <form>
    <input placeholder="search for movie" onChange={(e)=>setSearchText(e.target.value)}></input>
  </form>
    <div>
      {data.map( (oneMovie) =>{
         const {id, image, title, age, tags, description} = oneMovie
         return <div key={id}>
          <img src={image}></img>
          <h2>{title}</h2>
          <p>{age}</p>
          <p>{tags}</p>
          <p>{description}</p> 
         </div>
      } )}
    </div>
  </>



}

export default App