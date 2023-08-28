import "./Modal.css"
import { useEffect } from "react"

const Modal = ({notifContent, closeNotif}) => {

  useEffect( () =>{
    setTimeout( () => {
      closeNotif()
    }, 2000)


  })

  return (<div>
    {notifContent}
    <p onClick={closeNotif}>x</p>
    </div>
  )
}

export default Modal