import React, { useEffect, useState } from 'react'
import { useAuth } from '../Auth/contexts/AuthContext'
import { db } from '../../firebase'

function Round() {
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
            
            {show && <p> <div>
                <h3>Your Mining times: <span id="times">{info.time}</span></h3>
            </div></p>}
        </div>
    )
}

export default Round
