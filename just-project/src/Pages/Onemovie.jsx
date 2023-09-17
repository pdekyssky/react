import { useParams } from "react-router-dom"

const Onemovie = () => {
  
const {movieId}  = useParams()

  return (
    <div>{movieId}</div>
  )
}

export default Onemovie