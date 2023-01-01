import '../styles/LoginForm.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function LoginForm() {

    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const [email, setEmail] = useState("")
    const [pw, SetPw] = useState("")

    function logIn() {

        const formData = new FormData()
        formData.append("email", email)
        formData.append("pw", pw)
        console.log(formData)

        axios.post("http://localhost:3000/Publish/rest_login.php", formData ,{withCredentials:true})
        .then((response) => {
          setIsLoggedIn(response.data.admin)
          console.log(response.data)
        })
        .catch(e => {
            alert('Salasana tai sähköposti on virheellinen')
        })
    }

    const logoutUser = () => {
        axios.get('http://localhost:3000/Publish/rest_logout.php', {withCredentials:true})
          .then((response) => {
            alert(response.data)
            console.log(response.data)
            setIsLoggedIn(null)
          }).catch(error => {
            alert(error)
          })
      }

      let navigate = useNavigate();

      function next(e) {
        e.preventDefault()
        navigate('/admin')
      }

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div className="loginFormContainer">

            <button id="loginSignBtn" onClick={handleClick}>
            {isLoggedIn === 0 ? (
                     <svg style={{ color: isActive ? "#F8A700" : "white" }} id="loggedIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    ): (isLoggedIn === 1 ? (
                        <svg style={{ color: isActive ? "#F8A700" : "white" }} id="AdminIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill" viewBox="0 0 16 16">
                        <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
                        </svg>

                    ): (<svg style={{ color: isActive ? "#F8A700" : "white" }} id="loginSignIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                        <path fillRule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                    </svg>
                ))}
            </button>




            <div className="object" style={{display: isActive? "block" : "none"}}>
            {isLoggedIn === 0 ? (
                     <div className="d-flex flex-column justify-content-center ">
                        <h1 className="loggedInLinks">Tervetuloa sivustolle</h1>
                        <p className="username">{email}</p>
                        <button onClick={logoutUser} id="logout-button" classname="logoutBtn" type="submit">Kirjaudu ulos</button>
                    </div>
                    ): (isLoggedIn === 1 ? (

                    <div className="d-flex flex-column justify-content-center ">
                        <h1 className="loggedInLinks">Tervetuloa sivustolle</h1>
                        <p className="username">{email}</p>
                        <button id="admin-button" className="adminBtn" type="button" onClick={next}>Hallintatyökalu</button>
                        <button onClick={logoutUser} id="logout-button" classname="logoutBtn" type="submit">Kirjaudu ulos</button>
                    </div>

                    ): (<div className="form">
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
))}
            </div>
        </div>
    )

}

export default LoginForm;

