import Movies from "./Movies"

const MovieBox = ({data, deleteMovie}) => {
  return (
    <div>
    <Movies 
    data = {data}
    deleteMovie={deleteMovie}
    />
    </div>
  )
}

export default MovieBox