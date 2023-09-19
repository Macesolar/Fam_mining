import React from "react";
import './head.css'


function Headbar() {
    let url = '/'
    let url2 = '/mines'
    let url3 = '/profile'
    let url4 = '/e-wallet'
    let url5 = '/withdraw'
    let url6 = 'https://www.instagram.com/fammining'
    let url7 = 'https://mailto:support@fammining.com'
    let url8 = 'https://wa.me/447950183773'


    return(
        <div>
                        {/* <!-- SIDE BAR SECTION --> */}
                        <div class="main-box d-flex menu">
                <input type="checkbox" id="check" />
                <div class="btn_one">
                    <label for="check">
                    <i class="fas fa-bars"></i>
                    </label>
            <div class="nav flex-column nav-pills me-3 main-box-icon" id="v-pills-home-tab">
            
            <a href={url3} class="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle=""
            data-bs-target="#v-pills-home"
                ><i class="l1 fas fa-qrcode"><p>Dashboard</p></i></a>
            <a href={url2} class="nav-link"
            id="v-pills-analytics-tab"
            data-bs-toggle=""
            data-bs-target="#v-pills-analytics"
                ><i class="l fas fa-link"><p>Mines</p> </i>
                </a>

            <a href={url3}  class="nav-link"

            data-bs-toggle=""
            data-bs-target="#v-pills-details">
                <i class="l fas fa-stream"><p>Profile</p></i>
            </a>

            <a href={url4} class="nav-link"
            id="v-pills-wallet-tab"
            data-bs-toggle=""
            data-bs-target="#v-pills-wallet">
                <i class="l fas fa-calendar-week"><p>E_Wallet</p></i>
                </a>

            <a href={url5} class="nav-link"
            id="v-pills-payment-tab"
            data-bs-toggle=""
            data-bs-target="#v-pills-payment">
                <i class="l fas fa-sliders-h"><p>Withdraw</p></i>
                </a>

            </div>
                </div>
                <div class="sidebar_menu">
                    <div class="logo">
                    <a href={url}>
                        <img src="/logo.png" alt="" width= "100%" />
                    </a>

                    </div>
                    <div class="btn_two">
                    <label for="check">
                        <i class="fas fa-times"></i>
                    </label>
                    </div>
                    <div class="d-flex menu">
                    <ul class="nav flex-column nav-pills me-3" id="v-pills-home-tab">
                        <li
                        class="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-home"
                        >
                        <i class="fas fa-qrcode"></i>
                        <a href={url3}>Dashboard</a>
                        </li>
                        <li
                        class="nav-link"
                        id="v-pills-analytics-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-analytics"
                        >
                        <i class="fas fa-link"></i>
                        <a href={url2}>Mines Field</a>
                        </li>
                        <li
                        class="nav-link"
                        id="v-pills-details-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-details"
                        >
                        <i class="fas fa-stream"></i>
                        <a href={url3}>Profile</a>
                        </li>
                        <li
                        class="nav-link"
                        id="v-pills-wallet-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-wallet"
                        >
                        <i class="fas fa-calendar-week"></i>
                        <a href={url4}>E-Wallet</a>
                        </li>
                        <li  class="nav-link"
                        id="v-pills-payment-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#v-pills-payment">
                        <i class="fas fa-sliders-h"></i>
                        <a href={url5}>Withdraw</a>
                        </li>
                    </ul>
                    </div>
                    <div class="social_media">
                    <ul>
                        <a href={url}><i class="fab fa-facebook-f"></i></a>
                        <a href={url7}><i class="fab fa-twitter"></i></a>
                        <a href={url6}><i class="fab fa-instagram"></i></a>
                        <a href={url8}><i class="fab fa-whatsapp"></i></a>
                    </ul>
                    </div>
                </div>
                </div>
        {/* <!-- SIDE BAR SECTION ENDS --> */}
        </div>
    );
}

export default Headbar;