import React, {useEffect} from "react";
import img from '../Img/failed.png'
import { useHistory } from "react-router-dom";
import './account.css'


export default function Failed () {
    const history = useHistory()

    useEffect (() => {
        setTimeout(() => {
            history.push('/profile')
        }, 5000);
            
    },[])


    return(
        <div className="success">
            <img src={img} alt="logo" width="45%" />
        </div>
    )
}