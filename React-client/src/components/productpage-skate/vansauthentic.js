import '../../styles/product.css'

import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';


const Vansauthentic = (props) => {

    const [vansauthentic, setVansauthentic] = useState([]);

    let params = useParams();
    
    useEffect(() => {
      axios.get('http://localhost:3000/Publish/product-specific.php/' + params.productId)
        .then((response) => {
          const json = response.data;
          console.log(json);
          setVansauthentic(json.tuote);
        }).catch(error => {
          alert(error.response === undefined ? error : error.response.data.error);
        })
    }, [params])

    const {addToCart} = props;

    return (
        <div id="product">

            <div className="col-12 ">
            <img src= {props.skate} alt=""/>
            </div>

            <div className="container product">
                <div className="row">

                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                        <div className="d-sm-none carousel-item active col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>              
                        </div>

                        <div className="d-sm-none carousel-item col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_2.png')} alt=""/>
                        </div>

                        <div className="d-sm-none carousel-item col-xs-12">
                        <img className="d-block w-100" src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_3.png')} alt=""/>
                        </div>

                        
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="bi bi-caret-left-square-fill" aria-hidden="true"></span>
                        <span className="sr-only"></span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="bi bi-caret-right-square-fill"aria-hidden="true"></span>
                        <span className="sr-only"></span>
                        </a>
                        </div>
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>              
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_2.png')} alt=""/>
                        </div>

                        <div className="d-none d-sm-block col-sm-4 col-md-4 col-xl-4">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_3.png')} alt=""/>
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6 d-flex colorbox">

                        <form>
                        <h1>{props.name} {props.price}</h1>
                        <h4>Valitse väri</h4>
                        <select>
                            {props.color.map((color) => <option>{color}</option>)}
                        </select>
                        <h4>Valitse kokoluokka</h4>
                        <select>
                            {props.shoeSize.map((size) => <option>{size}</option>)}
                        </select>

                        {[vansauthentic].map(product => (
                        <div key={product.id}>
                        <button type="button" onClick={e => addToCart(product)}>Lisää koriin</button>
                        </div>
                        ))}

                        </form>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                        <img src={require('../../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Vans_Authentic/Vans_Authentic_1.png')} alt=""/>
                        </div>

                        <div className="line col-12"></div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                            <h1>Tuotetiedot</h1>
                            <ul>
                                {props.information.map((information) => <li>{information}</li>)}
                            </ul>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
                            <h1>Toimitus&palautus</h1>
                            <ul>
                            <li>Tuotteilla on ilmaiset toimitukset</li>
                            <li>Tarjoamme 30 päivän palautusoikeuden</li>
                            </ul>
                        </div>
    

                </div>
            </div>
        </div>
    )
}

export default Vansauthentic