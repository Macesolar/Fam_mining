import React from "react";
import './howto.css';
import Header from "../Home/Header";
import img from '../Img/logo2.png'


function Howto () {


    return (
        <div className="howto">
            <Header />
            <div className="how-section">
            <section class="first-section-how">
                <div class="first-side-how">
                    <img src={img} alt="Logo" width= "10%" />
                    <h1>How to Mine</h1>
                </div>
            </section>

            <div class="second-section-how">
                <div class="second-icons-how">
                    <i class="fa-solid fa-dollar-sign"></i>
                    <i class="fa-brands fa-ethereum"></i>
                    <i class="fa-solid fa-dollar-sign"></i>
                </div>

                <div class="second-items-how">
                    <ol type="1">
                    <li>
                        To play a turn you will be charged for a time, that is if you have
                        enough time.
                    </li>
                    <li>
                        Immediately your payment is confirmed, you online account will be
                        updated with the amount of time you purchased after that you can
                        start to play to earn.
                    </li>
                    <li>
                        Upon earning you are required to withdraw only what you earn that is
                        you cannot withdraw cash.
                    </li>
                    <li>
                        Your earnings can only be withdrawn when it is in the right amount
                        to be withdrawn depending on your wallet. You can check minimum
                        tranfer in your wallet for accounts different from your wallet app.
                    </li>
                    <li>Money deposited will be converted to time.</li>
                    <li>
                        In you profile You can choose the amount/worth of crypto you want to
                        mine and Click "Worth of crypto(posted)" after the Game says Start
                        and display the Start button .
                    </li>
                    <li>
                        This time will be reduce for each mining. in special cases in the
                        game, the higher the earning round the higher the time used to play.
                    </li>
                    <li>
                        If you do not have enoung time for a round, you will not be allowed
                        to start mining.
                    </li>
                    <li>
                        User buy time to play and use time earn the giving out
                        cryptocurrency by the website which can be withdrawn into their
                        account.
                    </li>
                    <li>
                        We are likely to upgrade our services from time to time. You can be
                        rest assured that our update will not lead to any financial loss.
                    </li>
                    <li>
                        Referral bonus of extra time for every new registration after an
                        initial deposit of the minimum deposit. Reference number will be
                        users unique registration number.
                    </li>
                    <li>
                        There will be monthly update on the statement of account of users.
                    </li>
                    <li>
                        Account of users will be deactivated in the case of suspected
                        fraudulent activity. (Fraudulent activity in all sense of fraud like
                        internet fraud, stealing, etc).
                    </li>
                    <li>
                        For the sake of transpiracy, names of all biggest earners
                        shall/maybe be published on the site from time to time.
                    </li>
                    <li>
                        The means of payment is an online platform both direct and indirect
                        deposit will be adopted. In the case of withdrawal, it depends on
                        how we want to pay you.
                    </li>
                    <li>Users must be up to 18 years to be a member.</li>
                    <li>
                        The time frame for this game is 24 hours, you can play as much as
                        you want depending on your time.
                    </li>
                    </ol>
                </div>
                </div>

                <div class="third-section-how">
                <div class="third-side-how">
                    <h2>Warning! Warning!! Warning!!!</h2>
                    <p>
                    This game might be addictive and you are liable to loose all your
                    personal earnings. It is not a guaranted source of income for
                    users.Only make Deposit after you have completed your Registration by
                    filling in your name, address, phone number etc and you see your name
                    displayed on your Profile page.
                   <div>
                    <strong>
                        This platform should on no circumstances be a source of financial
                        savings for users. Do not share your log in details with another as
                        Fam mining officials will never ask you for your details either
                        through email or phone call or any other means.
                    </strong>
                    </div>
                    </p>
                </div>
                </div>
                </div>

        </div>
    );
}

export default Howto