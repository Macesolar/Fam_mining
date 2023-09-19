import React from "react";
import Footer from "../Foot/Footer";
import Header from "../Home/Header";
import './faq.css'

function Faq () {

    let url = ''


    return (
        <div className="faq">
            <Header />
            
            <section class="faq-first-section">
            <div class="fourth-footer">
                <h1>Frequently Asked Questions</h1>
                <p>You ask? We answer!</p>
                <div class="container-fluid">
                <form class="d-flex">
                    <input
                    class="form-control me-2"
                    type="input"
                    placeholder="Question?"
                    aria-label="ask"
                    />
                    <button class="btn btn-outline-success" type="submit">Ask</button>
                </form>
                </div>
                <div class="question-section">
                <div class="question1">
                    <p>
                    What are the risks and guarantees for your customers?
                    <i class="fas fa-hand-point-down"></i>
                    </p>
                    <div class="question1-answer">
                    <hr />
                    Here in Fam Mining, we try to ensure that the risk are minimize by
                    us. You are guaranteed of your earnings when you want to withdraw.
                    </div>
                </div>
                <div class="question2">
                    <p>
                    When can I withdraw my earnings?
                    <i class="fas fa-hand-point-down"></i>
                    </p>

                    <div class="question2-answer">
                    <hr />
                    You can only make withdraw into your private wallet when you have
                    earned. Note: your transfer fee will be deducted only from your
                    earnings upon withdrawal.
                    </div>
                </div>

                <div class="question3">
                    <p>
                    Are my funds at risk in case of errors during deposit?
                    <i class="fas fa-hand-point-down"></i>
                    </p>

                    <div class="question3-answer">
                    <hr />
                    No, once an error occur during deposit. You will be refunded your
                    deposit. We are currently using one of the best online transaction
                    system.
                    </div>
                </div>
                <div class="question4">
                    <p>
                    What is the minimum and the maximum amounts that I can deposit?
                    <i class="fas fa-hand-point-down"></i>
                    </p>

                    <div class="question4-answer">
                    <hr />
                    The minimum deposit is only $5 USD, the maximum deposit is $100
                    USD.
                    </div>
                </div>
                <div class="question5">
                    <p>
                    Can I set up and use different accounts?
                    <i class="fas fa-hand-point-down"></i>
                    </p>

                    <div class="question5-answer">
                    <hr />
                    No, you are not allowed to have more than one account. It violates
                    and is against our policy.
                    </div>
                </div>

                <div class="question6">
                    <p>
                    How do I make a deposit or a withdrawal?
                    <i class="fas fa-hand-point-down"></i>
                    </p>

                    <div class="question6-answer">
                    <hr />
                    When you register, the link to all your deposits and withdrawals
                    are on your profile page. Please ensure that you only deposit
                    after you complete your registration.
                    </div>
                </div>
                </div>

                <p>Can't find an answer?<a href={url}> Email us</a></p>
            </div>
            </section>
            
            <Footer />

        </div>
    );
}


export default Faq;