import react, { useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css'
import logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'


const Register = (props) => {

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
                    <form className="registerForm">
                        <img className="logo" src={logo} alt=""></img>
                        <p className="inputLabels mt-0 mb-2">Sähköposti*</p>
                        <input className="registerInputs mb-2" type="email"></input>
                        <p className="inputLabels mb-2">Salasana*</p>
                        <input className="registerInputs w-100" type="password"></input>
                        <button className="registerButtons mx-0 d-block" type="submit">Luo uusi tunnus</button>
                        <button className="registerButtons mx-0"><Link id="frontPageLink" to="/">Palaa takaisin</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;