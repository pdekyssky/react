import "./ResetBtn.css"

const ResetBtn = (props) => {
    return (
        <div>
            <button type="button" onClick={props.reset}>RESET</button>
        </div>
    )
}

export default ResetBtn