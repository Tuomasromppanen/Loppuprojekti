import '../styles/nav.css'
import Logo from '../Kuvat/Sivustokuvat/Collect_shoes.png'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Shoppingcart from './Shoppingcart'
import Searchbar from './Searchbar.js'
import LoginForm from './LoginForm'

/*
*/
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid p-0">
        <img src={Logo} alt="" id='logo'></img>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mx-0 mb-2 mb-lg-0 d-flex">
            <li className='nav-item'>
              <Link className='nav-link' to="/">Kotisivu</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownMen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Miehet
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMen">
                <Link to="/WalkshoesMen" className="dropdown-item">Kävelykengät</Link>
                <Link to="/BasketballMen" className="dropdown-item">Koripallokengät</Link>
                <Link to="/SkateboardMen" className="dropdown-item">Skeittikengät</Link>
              </div>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" id="navbarDropdownWomen" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Naiset
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownWomen">
                <Link to="/WalkshoesWomen" className="dropdown-item">Kävelykengät</Link>
                <Link to="/BasketballWomen" className="dropdown-item">Koripallokengät</Link>
                <Link to="/SkateboardWomen" className="dropdown-item">Skeittikengät</Link>
              </div>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to="/Brands">Brandit</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="#">Tietoa meistä</Link>
            </li>
          </ul>
        </div>
        <Searchbar />
        <div className="d-flex flex-row buttonContainer">
          <LoginForm />
          <Shoppingcart />
          <button className="navbar-toggler p-0" data-bs-toggle="collapse" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <svg id="hamburgerIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;