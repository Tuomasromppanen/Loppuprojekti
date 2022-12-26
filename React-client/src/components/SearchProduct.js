import '../styles/searchProduct.css'
import { Link } from 'react-router-dom'

const SearchProduct = (props) => {
  
    return (
        <div className="d-flex border-bottom border-white py-3 w-100">
          <img className="productImage" src={props.image} alt=""/>
          <div className="productInfoContainer d-flex flex-column align-items-start px-2">
            <h1 className="productName">{props.name}</h1>
            <h2 className="productPrice">{props.price}€</h2>
            <Link className="link" to={`/${props.path}/${props.productId}`}>#Jalkineet</Link>
           {console.log(Link)}
          </div>
        </div>
      );
}
 
export default SearchProduct;