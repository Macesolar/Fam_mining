import React, { useState, useEffect, useRef, useContext } from 'react'
import { StateContext } from '../state/StateProvider';
import { useAuth } from '../Auth/Context/AuthContext';
import { db } from '../Firebase'
import { useHistory } from 'react-router-dom'
import Headbar from "../Main/Headbar";
import './account.css'


function Deposit() {
    const {setValue} = useContext(StateContext)
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const priceRef = useRef()
    const {  deposit, currentUser } = useAuth()
    const [error, setError] = useState("")
   const [ info, setInfo ] = useState()
    const [show, setShow] = useState(false)
    const [Loading, setLoading] = useState(false)
    const history = useHistory()

    let url = '/'


        
    useEffect (() => {
        setShow(false)
            
        db.collection('contact')
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
            if (snapshot.exists) {
                setInfo(snapshot.data())
                setShow(true)
            } else {
                setError ('Error: check network connection!')
                setShow(false)
            }
            

        })
        

    }, [])


    
    async function handle(e) {
        e.preventDefault()
        if (priceRef.current.value === "") {
            return setError('choose an amount to deposit') || setTimeout(() => {
                setError('')
                
              }, 5000);
        }

        

        try{
            setError('')
            setLoading(true)
            await deposit( firstNameRef.current.value, lastNameRef.current.value, emailRef.current.value, priceRef.current.value)
            setValue(priceRef.current.value);
            history.push("/google-pay")
            alert('Received! Your Profile will be Updated within 24 hours!!!')

        } catch {
            setError('Failed to proceed')
            setTimeout(() => {
                setError('')
                
              }, 5000);
        }
        setLoading(false)
        
    }


    return(
        
        <div className='withdraw-body'>
            <Headbar />
            <div class="withdraw">
            {/* <!-- THE PAYMENT HEAD SECTION --> */}
            <div class="head">
                {show && <p><h1><i>Hi</i> {info.firstName}</h1></p>}
                <h5>Welcome to your Payment Platform!</h5>
            </div>
            <div class="head1">
                <p>Transactions</p>
                <p class="ct"><a href={url}>fam-mining</a>  Payments</p>
            </div>

            {/* <!-- THE PAYMENT BODY SECTION --> */}
                <div class="container-fluid">
                <div class="">
                    <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                        {/* <!-- THE WITHDRAWAL AND DEPOSIT SECTION --> */}
                        <ul class="nav nav-pills bg-nav-pills nav-justified mb-3">
                            <li class="nav-item">
                            <a
                                href="#billing-information"
                                data-bs-toggle="tab"
                                aria-expanded="false"
                                class="nav-link rounded-0 active"
                            >
                                <i class="mdi mdi-account-circle font-18"></i>
                                <span class="d-none d-lg-block"><p className="with">Deposit Info</p></span>
                            </a>
                            </li>
                            
                        </ul>
                        <hr />
                        {/* <!-- Steps Information --> */}
                        <div class="tab-content">
                            {/* <!-- THE PAYMENT WITHDRAWAL SECTION--> */}
                            <div class="tab-pane show active" id="billing-information">
                            <div class="">
                                <div class="col-lg-8">
                                <h4 class="mt-2">Deposit information</h4>

                                <p class="text-muted mb-4">
                                    Fill the form below in order to buy Mining time
                                </p>

                                
                             <div className="text-danger">{error}</div>

                                <form className="withdraw-form" onSubmit={handle}>
                                    <div class="">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                        <label for="billing-first-name" class="form-label"
                                            >First Name</label>
                                        <input
                                            class="withdraw-form-control"
                                            type="text"
                                            placeholder="Enter your first name"
                                            id="billing-first-name"
                                            ref={firstNameRef}
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                        <label for="billing-last-name" class="form-label"
                                            >Last Name</label>
                                        <input
                                            class="withdraw-form-control"
                                            type="text"
                                            placeholder="Enter your last name"
                                            ref={lastNameRef}
                                            id="billing-last-name"
                                        />
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!-- end  --> */}
                                    <div class="">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                        <label
                                            for="billing-email-address"
                                            class="form-label"
                                            >Email Address
                                            <span class="text-danger">*</span></label>
                                        <input
                                            class="withdraw-form-control"
                                            type="email"
                                            value={currentUser.email}
                                            ref={emailRef}
                                            id="billing-email-address"
                                        />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                        
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!-- end  --> */}
                                    <div class="">
                                    <div class="col-12">
                                        <div class="mb-3">
                                        <label for="billing" class="form-label"
                                            >Amount <span class="text-danger">*</span></label>
                                        <select
                                            data-toggle="select2"
                                            title="Amount"
                                            data-select2-id="select2-data-1-6upb"
                                            tabindex="-1"
                                            class="select2-hidden-accessible"
                                            aria-hidden="true"
                                            ref={priceRef}
                                        >
                                            <option value= "" > Deposit Amount</option>
                                            <option value= {5}  >5 USD for 10 Times</option>
                                            <option value= {10} >10 USD for 20 Times</option>
                                            <option value= {20}  >20 USD for 40 Times</option>
                                            <option value= {50} >50 USD for 100 Times</option>
                                            <option value= {100} >100 USD for 200 Times</option>
                                            <option value= {200}  >200 USD for 400 Times</option>
                                            <option value= {300} >300 USD for 600 Times</option>
                                            <option value= {400}  >400 USD for 800 Times</option>
                                            <option value= {500} >500 USD for 1000 Times</option>
                                            <option value= {1000} >1000 USD for 2000 Times</option>

                                        </select>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!-- end  --> */}
                                    <button type="submit" 
                                    className="btn btn-primary"
                                    disabled={Loading}
                                    ><i class="fab fa-google"></i> Open Google Pay</button>
                                </form>
                                </div>
                            </div>
                            {/* <!-- end --> */}
                            </div>
                            {/* <!-- END OF THE PAYMENT WITHDRAWAL SECTION--> */}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                      

               

        </div>
    );
}

export default Deposit;