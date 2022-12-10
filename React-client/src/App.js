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
import WalkShoesW from "./Kuvat/Sivustokuvat/walkingWomen.jpg"

import NikeAirforce from "./components/productpage-walk/nikeairforce"
import NikeAirforce720 from "./components/productpage-walk/nikeairforce720"
import AdidasY3 from "./components/productpage-walk/adidasy3"
import NikeAirforce97 from "./components/productpage-walk/nikeairforce97"
import Yeezy from "./components/productpage-walk/yeezy"
import Adidasgazelle from "./components/productpage-walk/adidasgazelle"

import BasketBallM from "./Kuvat/Sivustokuvat/Basketball.jpg"
import BasketBallW from "./Kuvat/Sivustokuvat/basketballWomen.jpg"

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
import SkateBoardW from "./Kuvat/Sivustokuvat/skateboardingWomen.jpg"

import BasketballM from "./Kuvat/Sivustokuvat/Basketball.jpg"
import BasketballW from "./Kuvat/Sivustokuvat/basketballWomen.jpg"
import WalkingM from "./Kuvat/Sivustokuvat/photo.jpg"
import WalkingW from "./Kuvat/Sivustokuvat/walkingWomen.jpg"
import SkateboardM from "./Kuvat/Sivustokuvat/Skatebackground.jpg"
import SkateboardW from "./Kuvat/Sivustokuvat/skateboardingWomen.jpg"

import Register from './components/Register'

const App = () => {

  const [navbarHidden,setNavbarHidden] = useState(false)
  const [footerHidden,setFooterHidden] = useState(false)
  
  const url = 'http://localhost:3000/Publish'

  return (
   <>

  {navbarHidden
      ? null
      : <Nav url={url}/>
    }
    
    <Routes>
      <Route path="/" element={<FrontPage url={url}/>}></Route>
      {/* <Route path="mens" element={<Mens/>}></Route> */}
      <Route path="skeittikengät/:categoryskatetrnro" /*path="miestenskeittikengat"*/ element={<SkateBoard categoryHeader="Skeittikengät" picture={[SkateboardM]} /*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="kävelykengät/:categorywalktrnro" /*path="miestenkavelykengat"*/ element={<WalkShoes categoryHeader="Kävelykengät" picture={[WalkingM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="koripallokengät/:categorybaskettrnro" /*path="miestenkoripallokengat"*/ element={<Basketball categoryHeader="Koripallokengät" picture={[BasketballM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="brandisivusto" element={<Brands/>}></Route>
      <Route path="Register" element={<Register navbarHidingState={setNavbarHidden} footerHidingState={setFooterHidden} />}></Route>

      <Route path="miestenkavelykengat/nikeairforce" element={<NikeAirforce walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce" price="100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkavelykengat/nikeairforce720" element={<NikeAirforce720 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 720" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkavelykengat/adidasy3" element={<AdidasY3 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Y3" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkavelykengat/nikeairforce97" element={<NikeAirforce97 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 97" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/nikeairforce97" element={<NikeAirforce97 walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 97" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/yeezy" element={<Yeezy walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Yeezy" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkavelykengat/adidasgazelle" element={<Adidasgazelle walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Gazelle" price="80€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>

      <Route path="miestenkoripallokengat/jordan1low" element={<Jordan1low basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 low" price="170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkoripallokengat/jordan1mid" element={<Jordan1mid basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 Mid" price="150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkoripallokengat/nikekd" element={<NikeKD basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Nike KD" price="70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkoripallokengat/converse" element={<Converse basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Converse" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenkoripallokengat/reebok" element={<Reebok basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/reebok" element={<Reebok basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="miestenskeittikengat/vansspliton" element={<Vansspliton skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On" price="40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenskeittikengat/vanssplitonpro" element={<Vanssplitonpro skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On Pro" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenskeittikengat/vansauthentic" element={<VansAuthentic skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Authentic" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenskeittikengat/nikeblazer" element={<NikeBlazer skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Nike Blazer" price="60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="miestenskeittikengat/reebok" element={<Reebook skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>

    </Routes>

    {footerHidden
      ? null
      : <Footer/>
    }

   </>
  );
}

export default App;
