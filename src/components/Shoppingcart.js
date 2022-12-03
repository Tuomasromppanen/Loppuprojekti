import ShoppingcartItem from './ShoppingcartItem';
import React, { useState } from 'react';
import '../styles/shoppingcart.css'

const Shoppingcart = () => {

  const [isActive,setIsActive] = useState(false)
  
  const handleClick = () => {

    setIsActive(!isActive)
  }

  return (
    <div className="shoppingcartContainer">
      <button id="shoppincartBtn" onClick={handleClick}>
        <svg style={{color: isActive? "#F8A700" : "white"}} id="shoppingcartIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </button>

      <div className="shoppingcartShow" style={{display: isActive? "block" : "none"}}>
        <div className="shoppingcartArea p-4 w-100 h-100">
          <h2 className="shoppingcartHeader px-1">Ostoskori</h2>
          <ShoppingcartItem name={"Adidas Y3"} kpl={2} vari={"musta/valkonen"} koko={"42"} price={"200,00"} image={require('../Kuvat/Tuotekuvat/Adidas_Y3/Adidas_Y3_1.png')} />
          <ShoppingcartItem name={"Vans Slip-On"} kpl={1} vari={"musta/valkonen"} koko={"39"} price={"170,00"} image={require('../Kuvat/Tuotekuvat/Vans_SlipOn/Vans_SlipOn_1.png')} />
          <ShoppingcartItem name={"Nike Blazer Low"} kpl={1} vari={"musta/valkonen"} koko={"40"} price={"100,00"} image={require('../Kuvat/Tuotekuvat/Nike_Blazer_Low/Nike_Blazer_Low_1.png')} />
        </div>
        <div className="checkoutBtnArea d-flex flex-column">
          <p className="checkoutTexts mx-4">Tilauksen arvio:</p>
          <p className="checkoutTexts mx-4">Toimituksen kustannukset:</p>
          <p className="checkoutTexts mx-4">Yhteensä:</p>
          <button className="shoppingcartBtns p-1 mx-4">Jatka kassalle</button>
          <button className="shoppingcartBtns p-1 mx-4 my-2">Tyhjennä</button>
        </div>
      </div>
    </div>
  );
}

export default Shoppingcart;