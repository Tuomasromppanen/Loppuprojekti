import '../styles/Basketball.css'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const Basketball = (props) => {

  const [jordan1Low, SetJordan1Low] = useState([])
  const [jordan1Mid, SetJordan1Mid] = useState([])
  const [nikekd, SetNikekd] = useState([])
  const [converse, SetConverse] = useState([])
  const [reebok, SetReebok] = useState([])

  let params = useParams();

  useEffect(() => {

      axios.get('http://localhost:3000/Publish/product.php/' + params.categorybaskettrnro)
      .then((response) => {
        const json = response.data;
        console.log(json);
        SetJordan1Low(json.tuotteet[0]);
        SetJordan1Mid(json.tuotteet[1]);
        SetNikekd(json.tuotteet[2]);
        SetConverse(json.tuotteet[3]);
        SetReebok(json.tuotteet[4]);
      }).catch (error => {
        alert(error.response === undefined ? error:error.response.data.error);
      })
  
    }, [params])

    return (
        <div id="Basketball">
            <div className="col-12 ">
                <img src={props.picture} alt="" />
            </div>

            <div className="container Basketball">
                <div className="row">

                <div className="col-12 text-color">
                        <h5>Koripallokengät</h5>
                        <div className="col-12 border cr-color"></div>
                    </div>

                <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/jordan1low/" + jordan1Low.id}>
                        <img src={'http://localhost:3000/Publish/images/' + jordan1Low.kuva} alt="Loading..."/>
                        <h4>{jordan1Low.tuotenimi}</h4>
                        <p>{jordan1Low.hinta}</p>
                        </Link>                      
                  </div>

                  <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/jordan1mid/" + jordan1Mid.id}>
                        <img src={'http://localhost:3000/Publish/images/' + jordan1Mid.kuva} alt=""/>
                        <h4>{jordan1Mid.tuotenimi}</h4>
                        <p>{jordan1Mid.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/nikekd/" + nikekd.id}>
                        <img src={'http://localhost:3000/Publish/images/' + nikekd.kuva} alt=""/>
                        <h4>{nikekd.tuotenimi}</h4>
                        <p>{nikekd.hinta}</p>
                        </Link> 
                        </div>

                </div>
                <div className="row">

                <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/converse/" + converse.id}>
                        <img src={'http://localhost:3000/Publish/images/' + converse.kuva} alt=""/>
                        <h4>{converse.tuotenimi}</h4>
                        <p>{converse.hinta}</p>
                        </Link> 
                        </div>

                        <div className="col-xs-12 col-md-4 col-xl-4">
                        <Link to={"/reebok/" + reebok.id}>
                        <img src={'http://localhost:3000/Publish/images/' + reebok.kuva} alt=""/>
                        <h4>{reebok.tuotenimi}</h4>
                        <p>{reebok.hinta}</p>
                        </Link> 
                        </div>
                </div>
            </div>

        </div>
        
    )
}

export default Basketball