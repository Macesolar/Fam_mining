import React from "react";
import './about.css'
import Footer from "../Foot/Footer";
import Header from "../Home/Header";

function About () {

    let url = '/'

    return (
        <div className="about">
        <Header />
            <section class="about-first-section">
                    <div class="about-first-body">
                        <h1>About Us</h1>
                        <p><a href={url}>Home</a> <span>/</span> About Fam Mining</p>
                        <div class="first-image"></div>
                    </div>
            </section>

            {/* SECOND SECTIONS STARTS */}

            <section class="about-second-section">
                <div class="about-second-header">
                    <h1>
                    Designed with <br />
                    The Applicant in mind
                    </h1>
                    <p>
                    It is all about the fun and excitement as rewards are awarded for your
                    Mining Voyage!!
                    </p>
                </div>
                <div class="about-second-items">
                    <div class="about-second-section-items">
                    <div class="about-icons2">
                        <i class="fas fa-sack-dollar"></i>
                    </div>
                    <h3>Gains</h3>
                    <p>
                        A guaranteed potential earning of over $7000 USD monthly from our
                        mines.
                    </p>
                    </div>
                    <div class="about-second-section-items">
                    <div class="about-icons3">
                        <i class="fas fa-digging"></i>
                    </div>
                    <h3>Experience</h3>
                    <p>Gives you an online mining experience.</p>
                    </div>
                    <div class="about-second-section-items">
                    <div class="about-icons4">
                        <i class="fab fa-ethereum"></i>
                    </div>
                    <h3>Stocks</h3>
                    <p>
                        We give out what we have in stock to our users who are willing and
                        trustworthy.
                    </p>
                    </div>
                    <div class="about-second-section-items">
                    <div class="about-icons5">
                        <i class="fas fa-people-carry"></i>
                    </div>
                    <h3>Support</h3>
                    <p>
                        We are all gainers, whatever you mine is yours and it's worth
                        increases daily.
                    </p>
                    </div>
                </div>
            </section>

            <div class="about-second-section-cards">
                <div class="about-cards">
                    <div class="about-cards1">
                    <h3>Get Started With Fam Mining</h3>

                    <p>
                        Fam Mining is a digital mining platform where everyone can be an
                        earner.
                    </p>
                    <div class="about-second-row">
                        <div class="about-fifth-row">
                        <div class="about-fifth-col">
                            <p><i class="fa fa-user"></i></p>
                            <h3>11+</h3>
                            <p>Partners</p>
                        </div>

                        <div class="about-fifth-col">
                            <p><i class="fa fa-check"></i></p>
                            <h3>55+</h3>
                            <p>Projects</p>
                        </div>

                        <div class="about-fifth-col">
                            <p><i class="far fa-grin-beam"></i></p>
                            <h3>100+</h3>
                            <p>Happy Clients</p>
                        </div>

                        <div class="about-fifth-col">
                            <p><i class="fa fa-coffee"></i></p>
                            <h3>100+</h3>
                            <p>Meetings</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="about-cards2">
                    <h4>User Oriented</h4>
                    <p>
                        We serve as if we are serving ourselves, we value your feedback and
                        use it to improve our service. We ensure that the mining is fair for all
                        and very easy to access. All complains are quickly attended to and
                        addressed within 24 hours.
                    </p>
                    <p>
                        You can be part of our community in less than five (5) minutes. All
                        you have to do is register with us today.
                    </p>
                    </div>
                </div>
                </div>

                <section class="about-third-section">
                <h1>Fam Mining Motto</h1>

                <div class="about-info">
                    <div class="motto1">
                    <p>
                        This is a website that is dedicated to providing fun exerience with
                        making extra savings. Fam mining is all about mining for crypo
                        currency in a very easy and legal way. You can be sure of your
                        earnings at the end of the day. We are a dedicated team that is more
                        interested in people having fun and making it worth something. This
                        is done use a visual gold carth that symbolizes your findings.
                    </p>
                    <p>
                        Our diligent management and work ethic are central to leaving a
                        landmark in the world of digital gaming, crypto mining, and
                        returns. We pride ourselves as experts in these fields and we offer
                        premium service.
                    </p>
                    </div>
                    <div class="line"></div>
                    <div class="motto2">
                    <i class="fa-solid fa-microphone"></i>
                    <h2>Brief Info</h2>
                    </div>
                </div>
                <div class="about-mission">
                    <div class="motto3">
                    <i class="fa-solid fa-person-circle-question"></i>
                    <h2>Our Mission</h2>
                    </div>
                    <div class="line1"></div>
                    <div class="motto4">
                    <p>
                        Bring people together for the purpose of having fun and
                        earning something in return. Putting a smile in everyone's face while
                        they engage in our services.
                    </p>
                    <p>
                        Engaging the world in a new way of making gains. Our goal is to successfully 
                        get over 1 Million people worldwide out of poverty line. We aim to help people
                        have a value or an assest that will or may worth something someday according to most
                        economic experts.
                    </p>
                    </div>
                </div>

                <div class="about-user">
                    <div class="motto5">
                    <p>
                        We strive to reduce the activities of frauds involved in cryptocurrency. We provide
                        real services to serve the interests of our users. Make it easy for
                        every who wants to own a cryptocurrency to own one easily.
                    </p>
                    <p>
                        We encourage you to be part of the brand that brings the internet community to its new
                        economy. We would ensure that our users get to have digital mining experince in our platform.
                    </p>
                    </div>
                    <div class="line2"></div>
                    <div class="motto6">
                    <i class="fa-solid fa-infinity"></i>
                    <h2>Our Vision</h2>
                    </div>
                </div>
                </section>

            <Footer />

        </div>
    );
}

export default About