import "./DecreaseBtn.css"


const DecreaseBtn = (props) => {

    return (
        <div>
            <button type="button" onClick={props.decrease}>DECREASE</button>
        </div>
    )
}

export default DecreaseBtn