import "./DeleteBtn.css"

const DeleteBtn = (props) => {
    return (
        <div>
            <button className="delete-btn" onClick={props.deleteMovie}>Delete Movie</button>
        </div>
    )
}

export default DeleteBtn