import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import "./OneMovie.css"
import data from "../data"

const OneMovie = () => {
    const [index, setIndex] = useState(0)
   

    return <section className="all-movies">
        <div className="all-movies-content">
            {data.map( (oneMovie, oneMovieIndex ) => {
                const {id, image, title, age, tags, description } = oneMovie

                let mainClass = "next-slide"

                if (oneMovieIndex === index) {
                    mainClass = "active-slide"
                }
                if (oneMovieIndex === index - 1 || (index === 0 && oneMovieIndex === data.length - 1))  {    
                    mainClass = "last-slide"
                }


                return <article key={id} className={mainClass}>
                    <img src={image} alt="" />
                    <h2>{title}</h2>
                    <p>{description}</p>        
                    <p>{tags}</p>
                    <p>{age}</p>
                </article>
            })}
        </div>
        <button onClick={ () => setIndex(index - 1)}>
            <FaArrowLeft />
        </button>
        <button onClick={ () => setIndex(index + 1)}>
            <FaArrowRight />
        </button>
    </section>
}


export default OneMovie