import { Routes, Route} from "react-router-dom"
import react, {useState,useEffect} from 'react'
import Nav from './components/Nav'
import FrontPage from './components/FrontPage'
import Footer from './components/Footer'
import Brands from './components/Brands'
import WalkShoes from "./components/WalkShoes"
import SkateBoard from "./components/SkateBoard"
import Basketball from "./components/Basketball"

import WalkShoesM from "./Kuvat/Sivustokuvat/photo.jpg"

import NikeAirforce from "./components/productpage-walk/nikeairforce"
import NikeAirforce720 from "./components/productpage-walk/nikeairforce720"
import AdidasY3 from "./components/productpage-walk/adidasy3"
import NikeAirforce97 from "./components/productpage-walk/nikeairforce97"
import Yeezy from "./components/productpage-walk/yeezy"
import Adidasgazelle from "./components/productpage-walk/adidasgazelle"

import BasketBallM from "./Kuvat/Sivustokuvat/Basketball.jpg"

import Jordan1low from "./components/productpage-basket/jordan1low"
import Jordan1mid from "./components/productpage-basket/jordan1mid"
import NikeKD from "./components/productpage-basket/nikekd"
import Converse from "./components/productpage-basket/converse"
import Reebok from "./components/productpage-basket/reebok"

import Vansspliton from "./components/productpage-skate/vansspliton"
import Vanssplitonpro from "./components/productpage-skate/vanssplitonpro"
import VansAuthentic from "./components/productpage-skate/vansauthentic"
import NikeBlazer from "./components/productpage-skate/nikeblazer"
import Reebook from "./components/productpage-skate/reebok"

import SkateBoardM from "./Kuvat/Sivustokuvat/Skatebackground.jpg"

import BasketballM from "./Kuvat/Sivustokuvat/Basketball.jpg"
import WalkingM from "./Kuvat/Sivustokuvat/photo.jpg"
import SkateboardM from "./Kuvat/Sivustokuvat/Skatebackground.jpg"

import Register from './components/Register'

const App = () => {

  const [navbarHidden,setNavbarHidden] = useState(false)
  const [footerHidden,setFooterHidden] = useState(false)
  
  const url = 'http://localhost:3000/Publish'

  const [cart, setCart] = useState([]);


  function handleRemoveFromCart(product)  {
    const itemsWithoutRemoved = cart.filter(i => i.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }
  
  function addToCart(product) {

      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    
  }


  return (
   <>

  {navbarHidden
      ? null
      : <Nav url={url} cart={cart} />
    }
    
    <Routes>
      <Route path="/" element={<FrontPage url={url}/>}></Route>
      {/* <Route path="mens" element={<Mens/>}></Route> */}
      <Route path="skeittikengät/:categoryskatetrnro" /*path="miestenskeittikengat"*/ element={<SkateBoard categoryHeader="Skeittikengät" picture={[SkateboardM]} /*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="kävelykengät/:categorywalktrnro" /*path="miestenkavelykengat"*/ element={<WalkShoes categoryHeader="Kävelykengät" picture={[WalkingM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="koripallokengät/:categorybaskettrnro" /*path="miestenkoripallokengat"*/ element={<Basketball categoryHeader="Koripallokengät" picture={[BasketballM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="brandisivusto" element={<Brands/>}></Route>
      <Route path="Register" element={<Register navbarHidingState={setNavbarHidden} footerHidingState={setFooterHidden} />}></Route>

      <Route path="nikeairforce/:productId" element={<NikeAirforce handleRemoveFromCart={handleRemoveFromCart} addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce" price="100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="nikeairforce720/:productId" element={<NikeAirforce720 addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 720" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="adidasy3/:productId" element={<AdidasY3 addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Y3" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="nikeairforce97/:productId" element={<NikeAirforce97 addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 97" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="yeezy/:productId" element={<Yeezy addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Yeezy" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="adidasgazelle/:productId" element={<Adidasgazelle addToCart={addToCart} walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Gazelle" price="80€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>

      <Route path="jordan1low/:productId" element={<Jordan1low addToCart={addToCart} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 low" price="170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="jordan1mid/:productId" element={<Jordan1mid addToCart={addToCart} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 Mid" price="150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="nikekd/:productId" element={<NikeKD addToCart={addToCart} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Nike KD" price="70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="converse/:productId" element={<Converse addToCart={addToCart} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Converse" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="reebok/:productId" element={<Reebok addToCart={addToCart} basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>

      <Route path="vanspliton/:productId" element={<Vansspliton addToCart={addToCart} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On" price="40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="vansplitonpro/:productId" element={<Vanssplitonpro addToCart={addToCart} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On Pro" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="vansauthentic/:productId" element={<VansAuthentic addToCart={addToCart} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Authentic" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="nikeblazer/:productId" element={<NikeBlazer addToCart={addToCart} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Nike Blazer" price="60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="reebok/:productId" element={<Reebook addToCart={addToCart} skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>

    </Routes>

    {footerHidden
      ? null
      : <Footer/>
    }

   </>
  );
}

export default App;
