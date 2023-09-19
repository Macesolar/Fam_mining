import React, { useState, useEffect } from "react";
import Headbar from "./Headbar";
import './profile.css'
// import img from '../Img/eth.png'
import Ewith from "./Details/Ewith";
import { useAuth } from '../Auth/Context/AuthContext'
import { db } from '../Firebase'


function Ewallet() {
  const { currentUser } = useAuth()
  const [info, setInfo] = useState([])
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)


    
    useEffect (() => {
      setShow(true)
            
      db.collection(`contact`)
      .doc(currentUser.uid)
      .onSnapshot('value',(snapshot) => {
          if (snapshot.exists) {
            setInfo(snapshot.data())
              setShow(true)
              setShow1(false)
          } else {
              setInfo ('Please Wait')
              setShow(false)
              setShow1(true)
          }
          

      })

  }, [])


    return(
        
          <div className="mines-body">
            <Headbar />
        <div className="analysis" >
          <div class="head">
                {show && <p><h1><i>Hi</i> {info.Adress}</h1></p>}
            <h5>Welcome to your E-Wallet!</h5>
          </div>
          <div class="head1">
            <p>E-wallet</p>
          </div>

          
            <div class="third-row row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="fourth-row row" dir="ltr">
                      <div class="col-md-4">
                        <div className="e-wallet">
                            <div className="e-wallet-1">
                                <Ewith />

                                    {/* Eth SPACE */}
                                      <h4>Earned Ethereum </h4>
                            </div>

                            <div className="e-wallet-1">
                            {show && <p><strong><span>{info.withdrawTotal}</span></strong></p>}
                            {show1 && <p><strong><span>0</span></strong></p>}
                                  
                                   <h4>Total Withdrawals</h4>
                            </div>

                            {/* <div className="e-wallet-1">
                                <Ewith />
                                  
                                    <h4>Deposits</h4>
                            </div> */}
                          </div>
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

export default Ewallet;