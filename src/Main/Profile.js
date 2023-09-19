import React, { useState, useEffect } from "react";
import Headbar from "./Headbar";
import './profile.css'
import Footer from "../Foot/Footer";
import { useAuth } from '../Auth/Context/AuthContext'
import { useHistory } from "react-router-dom";
import { db } from '../Firebase'
import Ewith from "./Details/Ewith";
import Time from "./Details/Time";


function Profile() {

    // let url = '/'
    // let url1 = '/deposit'
    const { currentUser, logout } = useAuth()
    const history = useHistory()
    const [error, setError] = useState('')
    const [info, setInfo] = useState([])
    const [show, setShow] = useState(true)
   

    useEffect (() => {
        setShow(true)
              
        db.collection(`contact`)
        .doc(currentUser.uid)
        .onSnapshot('value',(snapshot) => {
            if (snapshot.exists) {
              setInfo(snapshot.data())
                setShow(true)
            } else {
                setInfo ('Please Wait')
                setShow(true)
            }
            
    
        })
    
     }, [])

     



    async function handleLogout() {
        setTimeout(() => {
          setError('')
          
        }, 5000);
  
      try {
          await logout()
          history.pushState('/login')
      }catch {
          setError('Failed to log Out')
      }
  
    }
  



    return(
        <div className="body-profile">

              <Headbar />
                <div class="profile">
                {/* <!-- THE PROFILE HEAD SECTION --> */}
                <div class="head">
                {show && <p><h1><i>Hi</i> {info.firstName}</h1></p>}
                  <div className="text-danger"><h5>{error}</h5></div>
                  <h5>Welcome to your Profile!</h5>
                </div>
                <div class="head1">
                  <p>Profile</p>
                </div>

                {/* <!-- THE PROFILE BODY SECTION --> */}
                <div class="">
                  <div class="">
                    {/* <!-- Profile --> */}
                    <div class="card bg-primary">
                      <div class="card-body profile-user-box">
                        <div class="row">
                          <div class="col-sm-8">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <div class="avatar-lg">
                                </div>
                              </div>
                              <div class="col">
                                <div>
                                {show && <p> <h4 class="mt-1 mb-1 text-white">{info.firstName} {' '} {info.lastName}</h4></p>}
                                  <p class="font-13 text-white-50">Authorised Fam-Miner</p>

                                  <ul class="mb-0 list-inline text-light">
                                    <li class="list-inline-item me-3">
                                    {show && <p><h5 class="mb-1 text-white"><Ewith /></h5></p>}
                                      <p class="mb-0 font-13 text-white-50">
                                        Total Ethereum
                                      </p>
                                    </li>
                                    <li class="list-inline-item">
                                    {show && <p><h5 class="mb-1 text-white"><Time /></h5></p>}
                                      <p class="mb-0 font-13 text-white-50">
                                        Number of Mining Times Remaining
                                      </p>
                                    </li>
                                  </ul>
                                  <div className="P-deposit-word"><h5>To buy more Time Click:</h5></div>
                                  <div className="P-deposit"><button className="P-deposit-btn btn btn-danger" onClick={(() => {history.push('./deposit')})}>Deposit</button></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- end col--> */}

                          <div class="col-sm-4">
                            <div class="text-center mt-sm-0 mt-3 text-sm-end">
                              
                            </div>
                          </div>
                          {/* <!-- end col--> */}
                        </div>
                        {/* <!-- end row --> */}
                      </div>
                      {/* <!-- end card-body/ profile-user-box--> */}
                    </div>
                    {/* <!--end profile/ card --> */}
                  </div>
                  {/* <!-- end col--> */}
                </div>

                {/* <!-- THE PROFILE PERSONAL INFO SECTION --> */}
                <div class="">
                  <div class="">
                    {/* <!-- Personal-Information --> */}
                    <div class="card">
                      <div class="card-body">
                        {/* <h4 class="header-title mt-0 mb-3"></h4> */}
                        <p class="text-muted font-13">
                        
                        </p>

                        <hr />

                        <div class="text-start">
                          <p class="text-muted">
                            <strong></strong>
                            <span class="ms-2"></span>
                          </p>

                          <p class="text-muted">
                            <strong></strong><span class="ms-2"></span>
                          </p>

                          <p class="text-muted">
                            <strong></strong>
                            <span class="ms-2"></span>
                          </p>

                          <p class="text-muted">
                            <strong></strong> <span class="ms-2"></span>
                          </p>

                          <div className="P-deposit">
                            <button 
                              onClick={handleLogout}
                              className= 'P-deposit-btn1 btn btn-secondary'  
                              >Log out</button> 
                          </div>
                        </div>

                        <div className="profile-footer">

                        <Footer />
                        </div>
                      </div>
                    </div>
                    {/* <!-- Personal-Information --> */}
                  </div>
                  {/* <!-- end col--> */}
                    </div>
                    </div>
              
                    
           

                  

            



        </div>
    );
}

export default Profile;