import { Routes, Route} from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
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

// const URL = 'http://localhost:3000/Publish/rest_product.php'

const App = () => {

  // const [header, setHeader] = useState([]);

  // useEffect(() => {
  //   axios.post(URL)
  //   .then((response) => {
  //     setHeader(response.data.tuotenimi)
  //     console.log(response)
  //   }).catch(error => {
  //     alert(error)
  //   })
  // }, [])


  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<FrontPage/>}></Route>
      {/* <Route path="mens" element={<Mens/>}></Route> */}
      <Route path="naistenskeittikengat" element={<SkateBoard categoryHeader="Naisten skeittikengät" picture={[SkateboardW]} /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="miestenskeittikengat" element={<SkateBoard categoryHeader="Miesten skeittikengät" picture={[SkateboardM]} /*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="naistenkavelykengat" element={<WalkShoes categoryHeader="Naisten kävelykengät" picture={[WalkingW]} /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="miestenkavelykengat" element={<WalkShoes categoryHeader="Miesten kävelykengät" picture={[WalkingM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="naistenkoripallokengat" element={<Basketball categoryHeader="Naisten koripallokengät" picture={[BasketballW]} /*shoeSize={[38,39,40,41]}*//>}></Route>
      <Route path="miestenkoripallokengat" element={<Basketball categoryHeader="Miesten koripallokengät" picture={[BasketballM]}/*shoeSize={[40,41,42,44]}*//>}></Route>
      <Route path="brandisivusto" element={<Brands/>}></Route>

      <Route path="miestenkavelykengat/nikeairforce" element={<NikeAirforce walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce" price="100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/nikeairforce" element={<NikeAirforce walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce" price="100€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/nikeairforce720" element={<NikeAirforce720 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 720" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/nikeairforce720" element={<NikeAirforce720 walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 720" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta", "Violetti"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/adidasy3" element={<AdidasY3 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Y3" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/adidasy3" element={<AdidasY3 walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Adidas Y3" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/nikeairforce97" element={<NikeAirforce97 walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Nike Airforce 97" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/nikeairforce97" element={<NikeAirforce97 walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Nike Airforce 97" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/yeezy" element={<Yeezy walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Yeezy" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/yeezy" element={<Yeezy walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Yeezy" price="200€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Ruskea"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkavelykengat/adidasgazelle" element={<Adidasgazelle walk={[WalkShoesM]} productHeader="Miesten kävelykengät" name="Adidas Gazelle" price="80€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkavelykengat/adidasgazelle" element={<Adidasgazelle walk={[WalkShoesW]} productHeader="Naisten kävelykengät" name="Adidas Gazelle" price="80€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Sininen"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="miestenkoripallokengat/jordan1low" element={<Jordan1low basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 low" price="170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/jordan1low" element={<Jordan1low basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Jordan 1 low" price="170€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Oranssi"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkoripallokengat/jordan1mid" element={<Jordan1mid basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Jordan 1 Mid" price="150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/jordan1mid" element={<Jordan1mid basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Jordan 1 Mid" price="150€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkoripallokengat/nikekd" element={<NikeKD basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Nike KD" price="70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/nikekd" element={<NikeKD basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Nike KD" price="70€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkoripallokengat/converse" element={<Converse basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Converse" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/converse" element={<Converse basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Converse" price="120€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenkoripallokengat/reebok" element={<Reebok basket={[BasketBallM]} productHeader="Miesten koripallokengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenkoripallokengat/reebok" element={<Reebok basket={[BasketBallW]} productHeader="Naisten koripallokengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

      <Route path="miestenskeittikengat/vansspliton" element={<Vansspliton skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On" price="40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenskeittikengat/vansspliton" element={<Vansspliton skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Split On" price="40€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenskeittikengat/vanssplitonpro" element={<Vanssplitonpro skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Split On Pro" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenskeittikengat/vanssplitonpro" element={<Vanssplitonpro skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Split On Pro" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Vihreä"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenskeittikengat/vansauthentic" element={<VansAuthentic skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Vans Authentic" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenskeittikengat/vansauthentic" element={<VansAuthentic skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Vans Authentic" price="50€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Punainen"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenskeittikengat/nikeblazer" element={<NikeBlazer skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Nike Blazer" price="60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenskeittikengat/nikeblazer" element={<NikeBlazer skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Nike Blazer" price="60€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Harmaa"]} shoeSize={[38,39,40,41]}/>}></Route>
      <Route path="miestenskeittikengat/reebok" element={<Reebook skate={[SkateBoardM]} productHeader="Miesten skeittikengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[40,41,42,44]}/>}></Route>
      <Route path="naistenskeittikengat/reebok" element={<Reebook skate={[SkateBoardW]} productHeader="Naisten skeittikengät" name="Reebok" price="90€" information={["Istuvuus: normaali", "Ylä: 100% nahka", "Ylävuori: 100% nahka", "Pohjallinen: 100% nahka", "Ulkopohja: 100% kumia", "Valimistettu: portugali"]} color={["Musta"]} shoeSize={[38,39,40,41]}/>}></Route>

    </Routes>
    <Footer/>
   </>
  );
}

export default App;
