import react, { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../styles/register.css'
import logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'


const Register = (props) => {

    const [email, setEmail] = useState("")
    const [pw, SetPw] = useState("")

    function register(e) {
        const json = {email, pw}
        console.log(json)
        axios.post("http://localhost:3000/Publish/rest_register.php", json ,{withCredentials:true})
        .then((response) => 
        setEmail(email),
        SetPw(pw))
        .catch(e => console.log(e.message))
        alert('Olet rekistöröitynyt asiakkaaksi')
    }

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }

    useEffect(() => {
        props.navbarHidingState(true)
        props.footerHidingState(true)
        return () => {
            props.navbarHidingState(false)
            props.footerHidingState(false)
        }
    }, [])

    return (
        <div className="container-fluid registerContainer">
            <div className="row">
                <div className="col-12">
                    <form className="registerForm" action='/' onSubmit={register}>
                        <img className="logo" src={logo} alt=""></img>
                        <p className="inputLabels mt-0 mb-2">Sähköposti*</p>
                        <input className="registerInputs mb-2" type="email" onChange={e=>setEmail(e.target.value)} required/>
                        <p className="inputLabels mb-2">Salasana*</p>
                        <input className="registerInputs w-100" type="password" onChange={e=>SetPw(e.target.value)} required/>
                        <button className="registerButtons mx-0 d-block" type="submit">Luo uusi tunnus</button>
                        <button id="frontPageLink" className="registerButtons mx-0" onClick={routeChange}>Palaa takaisin</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;