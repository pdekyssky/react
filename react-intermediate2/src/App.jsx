import "./App.css"
import { useState } from "react"

const App = () => {

  //const [fullName, setFullName] = useState("")
  //const [email, setEmail] = useState("")
  //const [age, setAge] = useState("")


  const [oneUser, setOneUser] = useState( {fullName: "", email: "", age: ""})
  const [users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
          //console.log("form was sended");
      if (oneUser.fullName && oneUser.email && oneUser.age) {
        const newUser = {fullName: oneUser.fullName, email: oneUser.email, age: oneUser.age}
        setUsers( (users) =>{
          return [...users, newUser]
        } )
        setOneUser( {fullName: "", email: "", age: ""} )
      } else {
        console.log("something was not filled ");
      }
     // setFullName("")
    //  setEmail("")
    //  setAge("")
  }

  const handleChange = (event) => {
      const name = event.target.name
      const value = event.target.value

      setOneUser({...oneUser, [name]: value})
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input 
            className="userInfo" 
            type="text" 
            placeholder="Name"
            value={oneUser.fullName}
            onChange={handleChange} 
            name="fullName">
            
        </input>

        <input 
            className="userInfo" 
            type="email" 
            placeholder="Email"
            value={oneUser.email}
            onChange={ handleChange}
            name="email">
        </input>

        <input 
            className="userInfo" 
            type="text" 
            placeholder="Age"
            value={oneUser.age}
            onChange={handleChange} 
            name="age">
        </input>

        <input type="submit" value="Submit"></input>
      </form>

      {users.map ( (oneUser, index) =>{
          const {fullName, email, age} = oneUser

          return (
            <div className="item" key={index}>
              <h4>{fullName}</h4>
              <p>{email}</p>
              <p>Age : {age}</p>
            </div>
          )
      } )}

    </div>
  )
}

export default App