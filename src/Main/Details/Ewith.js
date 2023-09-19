import React, { useEffect, useState } from "react";
import { useAuth } from '../../Auth/Context/AuthContext';
import { db } from '../../Firebase';
import img from '../../Img/eth.png'

export default function Ewith() {
    const { currentUser } = useAuth()
    const [info, setInfo] = useState([])
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(true)

   

    useEffect (() => {
        setShow(false)
        setShow1(false)
              
        db.collection('mine')
        .doc(currentUser.uid)
        .onSnapshot((snapshot) => {
            if (snapshot.exists) {
                setInfo(snapshot.data())
                setShow(true)
                setShow1(false)
            } else {
                setShow(false)
                setShow1(true)
            }
            
    
        })
        
    
     }, [currentUser])

        

    return (
        <div>
        {show && <p>
            <strong><span><img src= {img} height="20" width="20" alt="eth" />{info.earnings}</span></strong></p>}
        {show1 && <p><strong><img src= {img} height="20" width="20" alt="eth" /><span>0</span></strong></p>}
        </div>
    )
}
