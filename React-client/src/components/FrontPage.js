import '../styles/frontpage.css'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const FrontPage = ({url}) => {

    const [categorywalk, setCategorywalk] = useState([])
    const [categorybasket, setCategorybasket] = useState([])
    const [categoryskate, setCategoryskate] = useState([])
  
    useEffect(() => {
      console.log(url + '/product_group.php')
      axios.get(url + '/product_group.php')
      .then((response) => {
        const json = response.data;
        setCategorywalk(json[0]);
        setCategorybasket(json[1])
        setCategoryskate(json[2])
        console.log(json[0]);
      }).catch (error => {
        alert(error.response === undefined ? error:error.response.data.error);
      })
  
    }, [])

    return (
        <div className="container-fluid frontpage-container">
            <div className="row mx-0 d-none d-md-block">
                <div className="col-xs-12 col-md-12 col-xl-12 p-0 border">
                <img width="100%" src={require ("../Kuvat/Sivustokuvat/Skateboy.jpg")} alt=""></img>
                </div>
            </div>

            <div className="row">

            <div id="adTexts" className="col-6 d-none d-md-block border">

              <div className="information">

                <h1>Collect jäsen nyt</h1>
                <h2>Kaikki tarjoukengät</h2>
                <h3>-10%</h3>
                <button>Lue lisää</button>
                </div>

            </div>
            <div className="col-6 d-none d-md-block  border p-0">
            <img width="100%" height="100%"  src={require ("../Kuvat/Sivustokuvat/MallikuvaArtboard3.jpg")} alt=""></img>
            </div>
            </div>
            <div className="row mx-0 my-1 d-flex flex-lg-nowrap">
              <div className="col-xs-12 col-md-4 col-xl-4 p-0 border">
                <div className="wrapper-4">
                  <Link to={"/kävelykengät/" + categorywalk.trnro}><button>Kävelykengät</button></Link>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4 p-0 border">
              <div className="wrapper-6">
                  <Link  to={"/koripallokengät/" + categorybasket.trnro}><button>Koripallokengät</button></Link>
                </div>
              </div>
              <div className="col-xs-12 col-md-4 col-xl-4 p-0 border">
              <div className="wrapper-12">
                  <Link to={"/skeittikengät/" + categoryskate.trnro}><button>Skeittikengät</button></Link>
                </div>
              </div>
              
            </div>
        </div>
    );
}

export default FrontPage;