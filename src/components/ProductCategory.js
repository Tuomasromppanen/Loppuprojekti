import '../styles/productCategory.css'
import { Link } from 'react-router-dom'

const ProductCategory = (props) => {
    return (
        <div className="col-lg-4 col-sm-12 m-0 p-0 d-flex justify-content-center align-items-center"
            style={{ background: 'url' + '(' + props.image + ')', backgroundSize: 'cover', height: '60vh' }}>
            <div className="imageOverlay d-flex flex-column justify-content-center align-items-center">
                <h1>{props.categoryName}</h1>
                <div className="d-flex">
                    <Link to={props.menLink} className="d-inline genderLink">Miehet</Link>
                    <Link to={props.womenLink} className="d-inline genderLink">Naiset</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCategory;