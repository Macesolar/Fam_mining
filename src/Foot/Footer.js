import React from "react";
import { Link } from 'react-router-dom'
import './footer.css'
import img from '../Img/logo.png';

function Footer () {

    let url = ""
    let url1 = "/about"
    let url3 = '/how-to-mine'
    let url4 = '/signup'
    let url5 = '/terms-and-conditions'
    let url6 = '/mines'


    return (
        <div className="foot">
            {/* <!-- THIS IS THE FOOTER SECTION --> */}
            <section class="footer">
                <div class="first-footer">
                    <div class="footer1">
                    <img src={img} alt="LOGO" width="35%" />
                    <p>Our platform offers the best benefits</p>
                    <p>
                        <a href={url1}>Read More <i class="fas fa-arrow-right"></i></a>
                    </p>
                    </div>
                    <div class="footer2">
                    <h3>Company</h3>
                    <ul>
                        <li><a href={url1}>About Us</a></li>
                        <li><a href= {url}>Service</a></li>
                        <li><a href={url3}>How to Mine</a></li>
                        <li><a href={url5}>Terms and Conditions</a></li>
                        <li><a href={url}>Contact Us</a></li>
                    </ul>
                    </div>
                    <div class="footer3">
                    <h3>Get In Touch</h3>
                    <ul>
                        <li>
                        <a href={url}>contact@fammining.com</a>
                        </li>
                        <li><a href={url}>+(44) 79 501 837 73</a></li>
                        {/* <li>
                        442 Belle Terre St Floor 7, <br />
                        San Francisco, AV 4206
                        </li> */}
                    </ul>
                    </div>
                </div>
                <hr />
                <div class="second-footer">

                    <div class="footer-start-btn">
                    <a href={url4} class="reg1"> 
                        <div class="">
                        <i class="fas fa-mobile-android-alt"></i>Register
                    </div></a>
                    
                    <a href={url6} class="reg"> <div class="">
                        <i class="fas fa-dice-d6"></i>
                        Start Mining
                    </div></a> 
                    </div>
                    <div class="footer-par">
                    Copyright © 2022 Fam Mining. All rights reserved
                    <div><Link to='/privacy-policy'>Privacy Policy</Link></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer