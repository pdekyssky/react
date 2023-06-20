import "./App.css"
import { useState } from "react"

const App = () => {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [users, setUsers] = useState([])

  const formSubmit = (event) => {
    event.preventDefault()
          //console.log("form was sended");
      if (fullName && email) {
        const oneUser = {fullName: fullName, email: email, age: age}
        setUsers( (users) =>{
          return [...users, oneUser]
        } )
      } else {
        console.log("something was not filled ");
      }
      setFullName("")
      setEmail("")

  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input 
            className="userInfo" 
            type="text" 
            placeholder="Name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)} >
        </input>

        <input 
            className="userInfo" 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={ (event) => setEmail(event.target.value)}>
        </input>

        <input 
            className="userInfo" 
            type="text" 
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)} >
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