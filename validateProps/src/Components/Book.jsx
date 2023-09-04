import propTypes from "prop-types"
//prop types validate 
import defaultImage from "../images/book-default.jpg"


//this is last comment btw
//or you can make default props instantly in return 

const Book = ({id, image, title, price}) => {
  return ( <div>
    <h2>{title || "default title"}</h2>
    <img src={image || defaultImage} alt={title}/>
    <p>{price || 0} €</p>
  </div>
  )
}

//book.propTypes check if the defined prop is in data or not

Book.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
}

//default props which will be used if i dont get data

/*Book.defaultProps = {
  title: "default title",
  price: 0,
  image: defaultImage,
}
*/


export default Book