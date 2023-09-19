import React, { useState, useRef, lazy, Suspense, useEffect } from "react";
import './mine.css'
import { db } from '../Firebase';
import { useAuth } from '../Auth/Context/AuthContext';
//import First from "./First";
// import Second from './Second';
// import Third from './Third';
// import Forth from './Forth';
// import Fifth from './Fifth';
// import Sixth from './Sixth';
// import Seventh from './Seventh';
// import Eight from './Eight';
// import Ninth from './Ninth';
// import Tenth from './Tenth';
 import Headbar from "../Main/Headbar";


const First = lazy (()=> import ("./First"))
const Second = lazy (()=> import ('./Second'))
const Third = lazy (()=> import ('./Third'))
const Forth = lazy (()=> import ('./Forth'))
const Fifth = lazy (()=> import ('./Fifth'))
const Sixth = lazy (()=> import ('./Sixth'))
const Seventh = lazy (()=> import ('./Seventh'))
const Eight = lazy (()=> import ('./Eight'))
const Ninth = lazy (()=> import ('./Ninth'))
const Tenth = lazy (()=> import ('./Tenth'))


export default function Mines () {
    const mineRef = useRef()
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)
    const [show4, setShow4] = useState(false)
    const [show5, setShow5] = useState(false)
    const [show6, setShow6] = useState(false)
    const [show7, setShow7] = useState(false)
    const [show8, setShow8] = useState(false)
    const [show9, setShow9] = useState(false)
    const [show10, setShow10] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const { currentUser } = useAuth()
    const [info, setInfo] = useState('')


    let number = ''

    const initializeData =  db.collection(`mine`)
    useEffect (() => {
      setError ('')
                
          initializeData
          .doc(currentUser.uid)
          .onSnapshot((snapshot) => {
              if (snapshot.exists) {
                  setInfo(snapshot.data())
              } else {
                  setInfo ('Please Wait')
                  setError ('Check Network connection!')
              }
              
      
          })
  
          
          
    }, [])

    
    useEffect(() => {

        setError ('')
        
        if (info.time <= 0){
          setLoading (true)
          setError('Buy time to start Mining!!!')
        } else {
          setLoading(false)
          setError('')
        }

      }, [info])

    const open = (e) => {
        e.preventDefault()



            number = mineRef.current.value
        switch (number) {
            case '1':
                setShow(true)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '2':
                setShow(false)
                setShow1(true)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '3':
                setShow(false)
                setShow1(false)
                setShow2(true)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '4':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(true)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '5':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(true)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '6':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(true)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '7':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(true)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '8':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(true)
                setShow8(false)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '9':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(true)
                setShow9(false)
                setShow10(false)
                
                break;
                
            case '10':
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(true)
                setShow10(false)
                
                break;
        
            default:
                setShow(false)
                setShow1(false)
                setShow2(false)
                setShow3(false)
                setShow4(false)
                setShow5(false)
                setShow6(false)
                setShow7(false)
                setShow8(false)
                setShow9(false)
                setShow10(true)
                break;
        }

        console.log(number)
    }




    return(
        <Suspense fallback={<div className="app"><div className="app-loader"></div></div>}>
        <div>
            {show10 && <p>      
            <Headbar />
            <div className="mines">
                <form>
                         <div class="col-12">
                                        <div class="mine-mb-3">
                                        <label for="billing" class="mine-form-label"
                                            >Worth to Mine<span class="text-danger">*</span></label>
                                        <select
                                            data-toggle="select2"
                                            title="Mines"
                                            data-select2-id="select2-data-1-6upb"
                                            tabindex="-1"
                                            class="select2-hidden-accessible"
                                            className="mine-select"
                                            aria-hidden="true"
                                            ref={mineRef}
                                        >
                                            <option value= '0' > Ethereum Worth</option>
                                            <option value= '1'  >50 USD</option>
                                            <option value= '2' >100 USD</option>
                                            <option value= '3'  >500 USD</option>
                                            <option value= '4' >1,000 USD</option>
                                            <option value= '5' >5,000 USD</option>
                                            <option value= '6'  >10,000 USD</option>
                                            <option value= '7' >50,000 USD</option>
                                            <option value= '8'  >100,000 USD</option>
                                            <option value= '9' >500,000 USD</option>
                                            <option value= '10' >1,000,000 USD</option>

                                        </select>
                                        </div>
                                    </div>

                                    
                                    <div className="mines-head" >
                                    <div className="text-danger"><h5>{error}</h5></div>

                                    </div>

                                <div className="button-div">
                                <button onClick={open} 
                                        className="btn6 "
                                        disabled={loading}
                                        >Open Mine</button>
                                </div>
                    </form>
                    </div>
                                   
                </p>}

                {show && <p><First /></p>}

                {show1 && <p><Second /></p>}
                {show2 && <p><Third /></p>}
                {show3 && <p><Forth /></p>}
                {show4 && <p><Fifth /></p>}
                {show5 && <p><Sixth /></p>}
                {show6 && <p><Seventh /></p>}
                {show7 && <p><Eight /></p>}
                {show8 && <p><Ninth /></p>}
                {show9 && <p><Tenth /></p>}

        

        </div>
        </Suspense>
    )
}