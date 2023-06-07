import "./AllDelBtn.css"

const AllDelBtn = (props) => {
    return (
        <div>
            <button className="all-delete" type="button" onClick={props.deleteAllMovies}>Delete All</button>
        </div>
    )
}

export default AllDelBtn