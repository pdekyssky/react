import { useState, useEffect } from "react"
import "./App.css"

const App = () => {

  const url = "http://api.open-notify.org/iss-now.json"

  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinates = async () => {
    const response = await fetch(url)
    const data = await response.json()
    //console.log(typeof(data["iss_position"]["latitude"]));
    //console.log(data["iss_position"]["latitude"]);
    //console.log(data["iss_position"]["longitude"]);
    setLatitude(data["iss_position"]["latitude"]);
    setLongitude(data["iss_position"]["longitude"])

    const issLong = data["iss_position"]["longitude"]
    const issLat = data["iss_position"]["latitude"]
    setUrlMap(`https://sk.mapy.cz/zakladni?x=${issLong}&y=${issLat}&z=8`)
    }

    const handleClick = () =>{
      getCoordinates()
    }

    useEffect( () => {
      getCoordinates()
    }, [])

    

  return (
    <div>
      <h1>International Space Station Current Location</h1>
      <h2>ISS position Latitude</h2>
         <p>{latitude}</p> 
      <h2>ISS position Longitude</h2>
         <p>{longitude}</p> 
      <div></div>
      <button onClick={handleClick}>Get Latitude and Longitude</button>
      <div></div>
      <a href={urlMap} target="_blank">Position of ISS in Maps</a>
    </div>
  )
}

export default App