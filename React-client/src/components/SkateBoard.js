import '../styles/SkateBoard.css'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function SkateBoard(props) {

    const [vanspliton, SetVansPliton] = useState([])
    const [vansplitonpro, SetVansplitonpro] = useState([])
    const [vansauthentic, SetVansAuthentic] = useState([])
    const [nikeblazer, SetNikeBlazer] = useState([])
    const [reebok, SetReebok] = useState([])


    let params = useParams();

    useEffect(() => {
        console.log('http://localhost:3000/Publish/product.php/' + params.categoryskatetrnro)
        axios.get('http://localhost:3000/Publish/product.php/' + params.categoryskatetrnro)
        .then((response) => {
          const json = response.data;
          console.log(json);
          SetVansPliton(json.tuotteet[0]);
          SetVansplitonpro(json.tuotteet[1]);
          SetVansAuthentic(json.tuotteet[2]);
          SetNikeBlazer(json.tuotteet[3]);
          SetReebok(json.tuotteet[4]);
        }).catch (error => {
          alert(error.response === undefined ? error:error.response.data.error);
        })
    
      }, [params])

    return (
        <div id="SkateBoard">

            <div className="col-12 ">
            <img src={props.picture} alt=""/>
            </div>

            <div className="container skate">
                <div className="row">

                            
                    <div className="col-12 text-color">
                    <h5>Skeittikengät</h5>
                    <div className="col-12 border cr-color"></div>
                    </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="vansspliton">
                        <img src={'http://localhost:3000/Publish/images/' + vanspliton.kuva} alt="Loading..."/>
                        <h4>{vanspliton.tuotenimi}</h4>
                        <p>{vanspliton.hinta}</p>
                        </Link>                   
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="vanssplitonpro">
                        <img src={'http://localhost:3000/Publish/images/' + vansplitonpro.kuva} alt=""/>
                        <h4>{vansplitonpro.tuotenimi}</h4>
                        <p>{vansplitonpro.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="vansauthentic">
                        <img src={'http://localhost:3000/Publish/images/' + vansauthentic.kuva} alt=""/>
                        <h4>{vansauthentic.tuotenimi}</h4>
                        <p>{vansauthentic.hinta}</p>
                        </Link> 
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="nikeblazer">
                        <img src={'http://localhost:3000/Publish/' + 'images/' + nikeblazer.kuva} alt=""/>
                        <h4>{nikeblazer.tuotenimi}</h4>
                        <p>{nikeblazer.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to="reebok">
                        <img src={'http://localhost:3000/Publish/' + 'images/' + reebok.kuva} alt=""/>
                        <h4>{reebok.tuotenimi}</h4>
                        <p>{reebok.hinta}</p>
                        </Link> 
                        </div>


                </div>
            </div>
          
                

           

        </div>
    )
}

export default SkateBoard