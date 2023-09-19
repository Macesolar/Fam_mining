import React, { useEffect, useState } from "react";
import { useAuth } from '../../Auth/Context/AuthContext';
import { db } from '../../firebase';
import img from '../../Img/eth.png'

export default function Earns() {
    const { currentUser } = useAuth()
    const [info, setInfo] = useState([])
    const [show, setShow] = useState(false)
   

    useEffect (() => {
        setShow(false)
              
        db.collection('contact')
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
            if (snapshot.exists) {
                setInfo(snapshot.data())
                setShow(true)
            } else {
                setInfo ('Please Wait')
                setShow(false)
            }
            
    
        })
        
    
     }, [currentUser])

    return (
        <div>
        {show && <p><div>
            <h3>Your earnings: <img src= {img} height="20" width="20" alt="" /> <span id="yourEarnings">Eth {info.earnings}</span></h3>
        </div></p>}
        </div>
    )
}
