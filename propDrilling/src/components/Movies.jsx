

const Movies = ({data, deleteMovie}) => {
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