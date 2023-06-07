import "./ResetAll.css"

const ResetAll = (props) => {
    return (
        <div>
            <button className="reset-all" type="button" onClick={props.resetAllMovies}>Reload All Movies</button>
        </div>
    )
}

export default ResetAll