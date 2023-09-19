import React from "react";
import Header from "./Header";
import { useHistory } from "react-router-dom";
import './home.css';
import img from '../Img/Mines.gif';
// import img1 from '../Img/page/Angela.jpg'
// import img2 from '../Img/page/Peter.jpg'
// import img3 from '../Img/page/Austin.jpg'
// import img4 from '../Img/page/Cryptoblog1.jpg'
// import img5 from '../Img/page/Cryptoblog2.jpg'
// import img6 from '../Img/page/Cryptoblog3.jpg'
import img7 from '../Img/page/amex-removebg-preview.png'
import img8 from '../Img/page/mastercard-removebg-preview.png'
import img9 from '../Img/page/paypal-removebg-preview.png'
import img10 from '../Img/page/visa-secure-removebg-preview.png'
import Footer from "../Foot/Footer";


function Home () {

    const history = useHistory()

    let url = "/"
    let url1 = '/signup'
    let url2 = '/mines'


    return (
        <div className="home">
            <section class="first-section">
                <Header />
                <div class="first-body">
                    <div class="first-side">
                    <h4>Welcome to Fam Mining</h4>
                    <h1>Welcome to a cheap way to Acquire Cryptocurrency.</h1>
                    <p>
                        With as little as $5 USD, you can earn over $1000 USD a day and over
                        $7000 USD weekly. Take your first bold step today!
                    </p>
                    <br>
                    </br>
                    <p>
                        SPECIAL ANNOUNCEMENT!!! Mine up to $1,000,000 (One Million USD)
                        with as little as $5!!!
                    </p>
                    <div class="start-btn">
                        <a href={url1} class="reg1"> 
                        <div class="">
                        <i class="fas fa-mobile-android-alt"></i>Register
                        </div></a>
                        <a href={url2} class="reg"> <div class="">
                        <i class="fas fa-dice-d6"></i>
                        Start Mining
                        </div></a>
                    </div>
                    </div>

                    <div class="first-image">
                    <img src={img} alt="mines.gif" width="100%" />
                    </div>
                </div>
            </section>
     {/* THIS IS THE END OF FIRST SECTION */}
{/* 
     <!-- THIS IS THE START OF SECOND SECTION --> */}
            <section class="second-section">
            <div class="second-section2">
                <div class="second-header">
                <h1>
                    Designed with <br />
                    The Applicant in mind
                </h1>
                <p>
                    It is all about the fun and excitement as rewards are awarded for
                    your Mining Voyage!!
                </p>
                </div>
                <div class="second-items">
                <div class="second-section-items">
                    <div class="icons2">
                    <i class="fas fa-sack-dollar"></i>
                    </div>
                    <h3>Gains</h3>
                    <p>
                    A guaranteed potential earning of over $7000 USD monthly from our
                    mines.
                    </p>
                </div>
                <div class="second-section-items">
                    <div class="icons3">
                    <i class="fas fa-digging"></i>
                    </div>
                    <h3>Experience</h3>
                    <p>Gives you an online mining experience.</p>
                </div>
                <div class="second-section-items">
                    <div class="icons4">
                    <i class="fab fa-ethereum"></i>
                    </div>
                    <h3>Stocks</h3>
                    <p>
                    We give out what we have in stock to our users who are willing and
                    trustworthy.
                    </p>
                </div>
                <div class="second-section-items">
                    <div class="icons5">
                    <i class="fas fa-people-carry"></i>
                    </div>
                    <h3>Support</h3>
                    <p>
                    We are all gainers, whatever you mine is yours and it's worth
                    increases daily.
                    </p>
                </div>
                </div>
            </div>
            </section>
    {/* <!-- THIS IS THE END OF SECOND SECTION --> */}

    {/* <!-- THIS IS THE START OF THIRD SECTION --> */}
            <section class="third-section">
                <div id="third-space" class="carousel slide" data-bs-ride="carousel">
                    <div class="third-body carousel-inner">
                    <div class="carousel-item active">
                        {/* <img src={img1} alt="Photo5" /> */}
                        <figure>
                        <blockquote>
                            <p class="third-font">
                            "Fam Mining has helped me a lot with my cryptocurrency
                            journey. Before I started mining, I was a total novice but
                            now, Let's just say I'm really glad I found this mining
                            platform."
                            </p>
                        </blockquote>
                        <figcaption>—Aldous Huxley, <cite>05 Jan. 2022</cite></figcaption>
                        </figure>
                    </div>

                    <div class="carousel-item">
                        {/* <img src={img2} alt="Photo1" /> */}
                        <figure>
                        <blockquote>
                            <p class="third-font">
                            "It's so easy to use and understand. So far I've mined up to
                            1000ETH saved up to 500ETH coins."
                            </p>
                        </blockquote>
                        <figcaption>
                            —Joel Coursyvda, <cite>20 Jan. 2022</cite>
                        </figcaption>
                        </figure>
                    </div>
                    <div class="carousel-item">
                        {/* <img src={img3} alt="Photo2" /> */}
                        <figure>
                        <blockquote>
                            <p class="third-font">
                            " What I like most about fam-mining is that whether you're
                            mining or not, you get free ethers per day or per month
                            depending on your subscription plan."
                            </p>
                        </blockquote>
                        <figcaption>—Moeta Alan, <cite>20 Feb. 2022</cite></figcaption>
                        </figure>
                    </div>
                    </div>
                    <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#third-space"
                    data-bs-slide="prev"
                    >
                    <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#third-space"
                    data-bs-slide="next"
                    >
                    <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>
    {/* <!-- THIS IS THE END OF THIRD SECTION --> */}

    {/* <!-- THIS IS THE START OF FOURTH SECTION --> */}
            <section class="fourth-section">
                <div class="fourth-header">
                    <h1>Choose your plan</h1>
                    <p>Different mining styles to accommodate all financial limits</p>
                </div>
                <div class="fourth-items">
                    <div class="fourth-item1">
                    <h3>Open Pit</h3>
                    <p><i class="far fa-dollar-sign"></i><span>5-50</span>/month</p>
                    <p>One Mining Time cost $1.</p>
                    <hr />
                    <p><i class="far fa-check-circle"></i>Free Registration</p>
                    <p><i class="far fa-check-circle"></i>100% BONUS Mining Time</p>
                    <p><i class="far fa-check-circle"></i>24/7 Customer Service</p>
                    <p><i class="far fa-check-circle"></i>Mining Worth: $1000</p>
                    <button class="btn" onClick={(() => {history.push('./deposit')})}>Choose Plan</button>
                    </div>
                    <div class="fourth-item2">
                    <h3>UnderWater</h3>
                    <p><i class="far fa-dollar-sign"></i><span>100-500</span>/month</p>
                    <p>One Mining Time cost $1.</p>
                    <hr />
                    <p><i class="far fa-check-circle"></i>Free Registration</p>
                    <p><i class="far fa-check-circle"></i>100% BONUS Mining Time</p>
                    <p><i class="far fa-check-circle"></i>24/7 Customer Service</p>
                    <p><i class="far fa-check-circle"></i>Mining Worth: $50,000</p>
                    <p><i class="far fa-check-circle"></i>Medium Mining Plan</p>
                    <button class="btn" onClick={(() => {history.push('./deposit')})}>Choose Plan</button>
                    </div>
                    <div class="fourth-item3">
                    <h3>UnderGround</h3>
                    <p><i class="far fa-dollar-sign"></i><span>1000</span>/month</p>
                    <p>One Mining Time cost $1.</p>
                    <hr />
                    <p><i class="far fa-check-circle"></i>Free Registration</p>
                    <p><i class="far fa-check-circle"></i>100% BONUS Mining Time</p>
                    <p><i class="far fa-check-circle"></i>24/7 Customer Service</p>
                    <p><i class="far fa-check-circle"></i>Mining Worth: $500,000</p>
                    <p><i class="far fa-check-circle"></i>Unlimited Mining Plan</p>
                    <p><i class="far fa-check-circle"></i>SPECIAL Benefits</p>
                    <button class="btn" onClick={(() => {history.push('./deposit')})} >Choose Plan</button>
                    </div>
                </div>
                <div class="fourth-footer">
                    <h1>Frequently Asked Questions</h1>
                    <p>You ask? We answer!</p>
                    <div class="question-section">
                    <div class="question1-2">
                    <div class="question1">
                        <p className="question-p">
                        What are the risks and guarantees for your customers?
                        <i class="fas fa-hand-point-down"></i>
                        </p>
                        <div class="question1-answer">
                        <hr />
                        <p className="question-p">
                        Here in Fam Mining, we try to ensure that the risk are minimize by
                        us. You are guaranteed of your earnings when you want to withdraw.</p>
                        </div>
                    </div>
                    <div class="question2">
                    <p className="question-p">
                        When can I withdraw my earnings?
                        <i class="fas fa-hand-point-down"></i>
                        </p>

                        <div class="question2-answer">
                        <hr />
                        <p className="question-p">
                        You can only make withdraw into your private wallet when you have
                        earned. Note: your transfer fee will be deducted only from your
                        earnings upon withdrawal.</p>
                        </div>
                    </div>
                    </div>

                    <div class="question3-4">
                    <div class="question3">
                    <p className="question-p">
                        Are my funds at risk in case of errors during deposit?
                        <i class="fas fa-hand-point-down"></i>
                        </p>

                        <div class="question3-answer">
                        <hr />
                        <p className="question-p">
                        No, once an error occur during deposit. You will be refunded your
                        deposit. We are currently using one of the best online transaction
                        system.</p>
                        </div>
                    </div>
                    <div class="question4">
                    <p className="question-p">
                        What is the minimum and the maximum amounts that I can deposit?
                        <i class="fas fa-hand-point-down"></i>
                        </p>

                        <div class="question4-answer">
                        <hr />
                        <p className="question-p">
                        The minimum deposit is only $5 USD, the maximum deposit is $100
                        USD.</p>
                        </div>
                    </div>
                    </div>
                    </div> 
                    <p>Can't find an answer?<a href= {url}> Email us</a></p>
                    

                
                </div>
            </section>
    {/* // <!-- THIS IS THE END OF FOURTH SECTION --> */}

    {/* <!-- THIS IS THE BEGINING OF FIFTH SECTION --> */}
            <section class="fifth-section">
                

                <div class="fifth-row1">
                    <div class="fifth-col1">
                    <img src={img7} alt="express" />
                    </div>

                    <div class="fifth-col1">
                    <img src={img8} alt="master card" />
                    </div>

                    <div class="fifth-col1">
                <img src={img9} alt="paypal" />
                    </div>

                    <div class="fifth-col1">
                    <img src={img10} alt="visa" />
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
}

export default Home;