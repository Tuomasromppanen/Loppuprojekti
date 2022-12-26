import '../styles/format.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Confirmation from './Confirmation';


function Format(props) {

    const [etunimi, SetEtunimi] = useState('');
    const [sukunimi, SetSukunimi] = useState('');
    const [sahkoposti, SetSahkoposti] = useState('');
    const [osoite, SetOsoite] = useState('');
    const [postinumero, SetPostinumero] = useState('');
    const [puhelinnumero, SetPuhelinnumero] = useState('');
    const [postitoimipaikka, SetPostitoimipaikka] = useState('');


    // const [kanta_asiakas, SetKanta_asiakas] = useState('');
    const [maksutapa, SetMaksutapa] = useState('');
    const [postitustapa, SetPostitustapa] = useState('');
    const [finished, setFinished] = useState(false);

    function order(e) {
        e.preventDefault();

        const json = JSON.stringify({
            etunimi: etunimi,
            sukunimi: sukunimi,
            sahkoposti: sahkoposti,
            osoite:osoite,
            postinumero:postinumero,
            puhelinnumero: puhelinnumero,
            postitoimipaikka: postitoimipaikka,
            maksutapa: maksutapa,
            postitustapa: postitustapa,
            cart: cart.map((item) => ({
                id: item.id,
                quantity: item.quantity,
                koko: item.koko
            })),
        });

        console.log(json)

        axios.post('http://localhost:3000/Publish/save.php', json, {

        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(() => {
        setFinished(true);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data)
    })
}
    

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])

    let navigate = useNavigate();

    function Format() {
        navigate("/shoppingcartsite")
    }
    
    const {cart} = props;
    const sum = cart.reduce((total, item) => total + (item.quantity * item.hinta), 0);

    if (finished === false) {
    return (
        <div>
            <div id="format">
                <div className='container'>
                    <form onSubmit={order}>
                        <div className='row'>
                            <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                <h2>Täytä tiedot</h2>
                            </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Etunimi*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetEtunimi(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Sukunimi*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetSukunimi(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Sähköposti*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="email" onChange={e => SetSahkoposti(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Osoite*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetOsoite(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Postinumero*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetPostinumero(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Puhelinnumero*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetPuhelinnumero(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <label>Postitoimipaikka*</label>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <input type="text" onChange={e => SetPostitoimipaikka(e.target.value)} required></input>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Valitse toimitustapa</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <select onChange={e => SetPostitustapa(e.target.value)}>
                                    
                                            <option>Posti</option>
                                            <option>Pakettiautomaatti</option>
                                     
                                    </select>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Valitse maksutapa</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <select onChange={e => SetMaksutapa(e.target.value)}>
                                            <option>Visa</option>
                                            <option>Mastercard</option>
                                    </select>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <h3>Yhteenveto</h3>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-1 summa">
                                    <span>Ostokset yhteensä</span>
                                    <span>{sum} €</span>
                                </div>

                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">
                                    <button type="submit">Vahvista maksutapahtuma</button>

                                </div>
                                <div className="col-xs-12 col-md-12 col-xl-12 p-0">

                                    <button type="button" onClick={Format}>Palaa takaisin ostoskoriin</button>
                                </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
} else {

  return(
    <Confirmation/>
    )
    
    
}

}


export default Format