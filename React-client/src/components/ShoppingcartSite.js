import "../styles/ShoppingcartSite.css"
import { Link } from "react-router-dom";
import react, { useState, useEffect} from 'react'
import ShoppingcartItem from './ShoppingcartItem';


const ShoppingcartSite = (props) => {

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])

    const {handleRemoveFromCart} = props
    const {cart} = props;

    const sum = cart.reduce((total, item) => total + (item.quantity * item.hinta), 0);
    
    return (
        <div id="Shoppingcart">

            <div className="container">

                <div id='header' className="col-9">
                    <h1>Ostoskori</h1>
                </div>

                <table className="table">
                    <tbody>

                    {cart.map((item) => (
                    <ShoppingcartItem
                    image={'http://localhost:3000/Publish/images/' + item.kuva}
                    name={item.tuotenimi}
                    price={item.hinta}
                    quantity={item.quantity}
                    koko = {item.koko}
                    vari = {item.vari}
                    product = {item}
                    handleRemoveFromCart = {handleRemoveFromCart}

                    />
                ))}
                    </tbody>
                </table>

                <div id='total' className="col-12">
                    <p id="totalText">Yhteensä: <span>{sum} €</span></p>
                </div>

                <div className="col-12 d-flex justify-content-center m-b-5">
                    <Link to= {{pathname: "/format", sum:sum}} id='checkOutButton'>Jatka maksamaan</Link>
                </div>
                <div className="col-12 d-flex justify-content-center  m-b-5">
                    <Link to="/kävelykengät/1" id="backButton">
                        Takaisin kotisivulle
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ShoppingcartSite;