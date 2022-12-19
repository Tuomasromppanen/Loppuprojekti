import '../styles/WalkShoes.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"


function WalkShoes(props) {

    const [airforce, SetAirforce] = useState([])
    const [airforce720, SetAirforce720] = useState([])
    const [adidasy3, SetAdidasy3] = useState([])
    const [nikeairforce97, SetNikeAirforce97] = useState([])
    const [yeezy, SetYeezy] = useState([])
    const [adidasgazelle, SetAdidasgazelle] = useState([])


    let params = useParams();

    useEffect(() => {
        let address = '';

        if (params.searchPhrase === undefined) {
            address = ('http://localhost:3000/Publish/product.php/' + params.categorywalktrnro)
        } else {
            address = ('http://localhost:3000/Publish/product.php/' + params.searchPhrase)
        }

        console.log(address)
        axios.get(address)
        .then((response) => {
          const json = response.data;
          console.log(json);
          SetAirforce(json.tuotteet[0]);
          SetAirforce720(json.tuotteet[1]);
          SetAdidasy3(json.tuotteet[2]);
          SetNikeAirforce97(json.tuotteet[3]);
          SetYeezy(json.tuotteet[4]);
          SetAdidasgazelle(json.tuotteet[5]);
        }).catch (error => {
          alert(error.response === undefined ? error:error.response.data.error);
        })
    
      }, [params])
      
    
    return (
        <div id="walkshoes">

            <div className="col-12 ">
            <img src={props.picture} alt=""/>
            </div>

            <div className="container walk">
                <div className="row">

                    <div className="col-12 text-color">
                        <h5>Kävelykengät</h5>
                        <div className="col-12 border cr-color"></div>
                    </div>



                        
                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/nikeairforce/" + airforce.id}>
                        <img src={'http://localhost:3000/Publish/images/' + airforce.kuva} alt="Loading..."/>
                        <h4>{airforce.tuotenimi}</h4>
                        <p>{airforce.hinta}</p>
                        </Link>                      
                        </div>
                    
                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/nikeairforce720/" + airforce720.id}>
                        <img src={'http://localhost:3000/Publish/images/' + airforce720.kuva} alt=""/>
                        <h4>{airforce720.tuotenimi}</h4>
                        <p>{airforce720.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/adidasy3/" + adidasy3.id}>
                        <img src={'http://localhost:3000/Publish/images/' + adidasy3.kuva} alt=""/>
                        <h4>{adidasy3.tuotenimi}</h4>
                        <p>{adidasy3.hinta}</p>
                        </Link> 
                        </div>
                        
                </div>
                <div className="row">

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/nikeairforce97/" + nikeairforce97.id}>
                        <img src={'http://localhost:3000/Publish/images/' + nikeairforce97.kuva} alt=""/>
                        <h4>{nikeairforce97.tuotenimi}</h4>
                        <p>{nikeairforce97.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/yeezy/" + yeezy.id}>
                        <img src={'http://localhost:3000/Publish/images/' + yeezy.kuva} alt=""/>
                        <h4>{yeezy.tuotenimi}</h4>
                        <p>{yeezy.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/adidasgazelle/" + adidasgazelle.id}>
                        <img src={'http://localhost:3000/Publish/images/' + adidasgazelle.kuva} alt=""/>
                        <h4>{adidasgazelle.tuotenimi}</h4>
                        <p>{adidasgazelle.hinta}</p>
                        </Link> 
                        </div>

                </div>
            </div>
          
                

           

        </div>
        // <div>
        //     <h3>products {category}</h3>
          
        //         <div >
        //             {products}
        //             </div>
           
              
          

          
        // </div>

    )
}

export default WalkShoes