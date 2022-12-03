import '../styles/WalkShoes.css'
import { Link } from 'react-router-dom'

function WalkShoes(props) {
    return (
        <div id="walkshoes">

            <div className="col-12 ">
            <img src={props.picture} alt=""/>
            </div>

            <div className="col-12">
                <p>30 päivän palautusoikeus</p>
                <p>Ilmainen toimitus ja palautus</p>
            </div>

            <div className="col-12">
                <h1>{props.categoryHeader}</h1>
            </div>

            <div className="container walk">
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="nikeairforce">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_AirForce_1/Nike_AirForce_1_1.png')} alt=""/>
                        <h4>Nike Airforce</h4>
                        <p>100,00€</p>
                        <span></span>
                        </Link>                      
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="nikeairforce720">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_AirMax_720/Nike_AirMax_720_1.png')} alt=""/>
                        <h4>Nike Airforce 720</h4>
                        <p>120,00€</p>
                        <span></span>
                        <span></span>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="adidasy3">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Adidas_Y3/Adidas_Y3_1.png')} alt=""/>
                        <h4>Adidas Y3</h4>
                        <p>200,00€</p>
                        <span></span>
                        </Link> 
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="nikeairforce97">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Nike_AirMax_97/Nike_AirMax_97_1.png')} alt=""/>
                        <h4>Nike Airforce 97</h4>
                        <p>90,00€</p>
                        <span></span>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="yeezy">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Yeezy/Yeezy_1.png')} alt=""/>
                        <h4>Yeezy</h4>
                        <p>200,00€</p>
                        <span></span>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="adidasgazelle">
                        <img src={require('../Kuvat/Tuotekuvat/Paivitetyt_Tuotekuvat/Adidas_Gazelle/Adidas_Gazelle_1.png')} alt=""/>
                        <h4>Adidas Gazelle</h4>
                        <p>80,00€</p>
                        <span></span>
                        </Link> 
                        </div>

                </div>
            </div>
          
                

           

        </div>
    )
}

export default WalkShoes