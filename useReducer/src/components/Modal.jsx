import "./Modal.css"
import { useEffect } from "react"

const Modal = ({notifContent, closeNotif}) => {

  useEffect( () =>{
    setTimeout( () => {
      closeNotif()
    }, 2500)


  })

  return (<div className="modal-box">
    <div className="modal-text">{notifContent}</div>
    {/*<p onClick={closeNotif}>x</p>*/}
    </div>
  )
}

export default Modal