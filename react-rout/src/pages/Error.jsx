import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h2>Error 402</h2>
      <p>web page not found</p>
      <Link to="/">Home page</Link>
    </div>
  )
}

export default Error