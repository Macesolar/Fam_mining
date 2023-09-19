import React, { useState } from "react";
import './min.css';
import img from '../Img/eth.png'




function Min() {
    const [num, setNum] = useState(0)
    const [show, setShow] = useState(false)

    let kip = Math.random()

    const Mines = () => {
            let moon = kip /100
        setNum (moon.toFixed(5))

    }


    return(
        <div className= "body-min">
            <div className="welcome">
            <h2>Welcome,</h2>
            </div>

            <div className="earnings">
                <h4>Your Earnings:  <img src={img} alt="eth"  width='30px' height='30px' />{num}</h4>
            </div>
            <div className='body' >
            <div class="load3-outer">
                <div class="load3-inner">
                    
                <div className='load-inner'>
                    </div>
                </div>
            </div>
        </div>
                

            <button 
            className="btn btn-primary"
            onClick={Mines}>Mine</button>

            </div>
           
        
    );
}

export default Min;