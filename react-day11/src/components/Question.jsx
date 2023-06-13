import "./Question.css"
import { useState } from "react"

const Question = ({title, info}) => {
    const [show, setShow] = useState(false)
    console.log(show);
    return <div>
        
        <section>
            <h2>{title}</h2>
            <button onClick={() => setShow( !show )}>Answer</button>
        </section>
        
        {show && <p>{info}</p>}
    </div>
}

export default Question