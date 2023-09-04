import Book from "./Book"
import data from "../Data"


const Books = () => {
  return ( <div>
    {data.map( (oneBook) => {
        {/*...oneBook sending all data via spread operator to child Book*/}
        return  <Book key={oneBook.id} {...oneBook}/>

    })}
  </div>
   
  )
}

export default Books