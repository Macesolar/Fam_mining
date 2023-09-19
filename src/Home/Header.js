import React from "react";
import './header.css'
import img from '../Img/logo.png'

function Header () {
    let url = '/'
    let url1 = '/profile'
    let url2 = '/about'
    let url3 = '/how-to-mine'
    let url4 = '/faq'
    let url5 = '/login'
    let url6 = '/signup'


    return (
        <div className="header">
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
              <div class="container">
                <a class="navbar-brand" href={url}>
                  <img src={img} alt="LOGO" width="120px" height='120px'
                /></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href={url}>Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href={url2}>About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href={url1}>Profile</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href={url3}>How To Mine</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href={url4}>FAQ</a>
                    </li>
                  </ul>
                  <div class="d-flex profile">
                    <div class="login">
                      <i class="far fa-user"></i>
                      <a href= {url5}>Login</a>
                    </div>
                    <div class="start">
                      <a href={url6}><p>Get Started</p></a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            
        </div>
    );
} 

export default Header;