import { useState, useEffect } from "react"
import "./App.css"

const url = "http://api.open-notify.org/iss-now.json"

//multiple returns 

const App = () => { 



  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setLatitude(data.iss_position.latitude);
        setLongitude(data.iss_position.longitude);
        setLoading(false);
      })
  }, []);

        

  if (loading) {
    return <h2>App si loading </h2>
  }
  return (
    <div>
        <h2>Latitude</h2>
          <p>{latitude}</p>
        <h2>Longitude</h2>
          <p>{longitude}</p>
    </div>
  )
}

export default App