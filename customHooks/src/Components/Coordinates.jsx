import { useState } from "react"
import useFetch from "./useFetch"


const url = "http://api.open-notify.org/iss-now.json"



    const Coordinates = () => {
    
    const {data, loading} = useFetch(url)

        return ( 
        <div>
          <div>
              {loading ? "Loading..." : <div>
                  <h2>Longitude</h2>
                  <p>{data.iss_position?.longitude}</p>
                  <h2>Latitude</h2>
                  <p>{data.iss_position?.latitude}</p>
                  {/*Call coordinates function on click*/}
                  <button>Get new data</button>
                  <p>literally dont know how to make it work on button click </p>
              </div>}
          </div>
        </div>
         ) }
    
  


export default Coordinates