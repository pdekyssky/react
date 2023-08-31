import { useState, useEffect } from "react"

const Coordinates = () => {

    const [loading, setLoading] = useState(true)


  return ( 
  <div>
    <div>
        {loading ? "Loading..." : "data"}
    </div>
  </div>
    
  )
}

export default Coordinates