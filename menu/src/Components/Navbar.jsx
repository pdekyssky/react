import "./Navbar.css"
import logo from "../Images/netflix.png"
import { GiHamburgerMenu } from "react-icons/gi"
import links from "../data"
import { useState } from "react"

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(true)

  return (
  <nav>
    <div className="navigation">
      <div className="nav-header">
             <img src={logo} />
        <button onClick={()=> setShowMenu(!showMenu)}>
          <GiHamburgerMenu className="hamburger-icon"/>
        </button>
      </div>
      <div className={showMenu ? "nav-list hide" : "nav-list show"}>
      <ul>
        {
          links.map( (oneLink) => {
            const {id, url, text} = oneLink
            return <li key={id}>
                          <a href={url}>{text}</a>
                      </li>
          })
        }
      </ul>
    </div>
    </div>
   
  </nav>
  )
}

export default Navbar