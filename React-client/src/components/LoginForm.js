import '../styles/LoginForm.css'
import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function LoginForm() {

    const [email, setEmail] = useState("")
    const [pw, SetPw] = useState("")

    function logIn() {

        const formData = new FormData()
        formData.append("email", email)
        formData.append("pw", pw)

        axios.post("http://localhost:3000/Publish/rest_login.php", formData ,{withCredentials:true})
        console.log(formData)
        .then((response) => 
        setEmail(email),
        SetPw(pw))
        .catch(e => console.log(e.message))

        }

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="loginFormContainer">

            <button id="loginSignBtn" onClick={handleClick}>
                <svg style={{color: isActive? "#F8A700" : "white"}} id="loginSignIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                    <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                </svg>
            </button>


            <div className="object" style={{display: isActive? "block" : "none"}}>
                <div className="form">
                    <form>

                        <div className="form-header">
                            <h4>kirjaudu sisään</h4>
                        </div>

                        <div className="form-logIn">
                            <label>Sähköposti</label>
                            <input type="email" value={email} placeholder="Syötä sähköpostiosoite" onChange={e=>setEmail(e.target.value)} required></input>
                            <label>Salasana</label>
                            <input type="password" value={pw} placeholder="Syötä salasana" onChange={e=>SetPw(e.target.value)} required></input>
                            <a href="/#"> Unohditko salasanan</a>
                            <button type="button" onClick={logIn}>Kirjaudu sisään tunnuksillasi</button>
                        </div>

                    </form>

                    <div className="form-register">
                       <button>
                            <Link className="registerLink" to="/register">Rekisteröidy asiakkaaksi</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default LoginForm;

