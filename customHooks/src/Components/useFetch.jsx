import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    //fetch api data

   
    //call fetch at the end and onlz for once
    useEffect(() => {
        const getCoordinates = async () => {
            const response = await fetch(url)
            const issCoordinates = await response.json()
            setLoading(false)
            setData(issCoordinates)
            //console.log("test");
        }
        getCoordinates()
    }, [url])

    return {data, loading }
}

export default useFetch;