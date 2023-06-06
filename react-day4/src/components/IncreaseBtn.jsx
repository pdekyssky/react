import "./IncreaseBtn.css"

const IncreaseBtn = (props) => {
    
    return (
        <div>
            <button type="button" onClick={props.increase}>INCREASE</button>
        </div>
    )
}

export default IncreaseBtn