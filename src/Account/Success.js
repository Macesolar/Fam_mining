import React, {useEffect} from "react";
import img from '../Img/success.png'
import { useHistory } from "react-router-dom";
import './account.css'


export default function Success () {
    const history = useHistory()

    useEffect (() => {
        setTimeout(() => {
            history.push('/profile')
        }, 5000);
            
    },[])


    return(
        <div className="success">
            <img src={img} alt="logo" width="45%" />
            <div>
            <h2 className="text-success">Your Account will Be Updated Within 24 HOURS!!</h2>
            </div>

        </div>
    )
}