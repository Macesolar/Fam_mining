import React, { useEffect, useState } from "react";
import { db, data } from '../Firebase';
import { useAuth } from '../Auth/Context/AuthContext';
import Headbar from "../Main/Headbar";
import './mine.css';
import Time from "../Main/Details/Time";


function Forth() {
    //@ $1000 
    const [show, setShow] = useState(true)
    const { currentUser } = useAuth()
    const [info, setInfo] = useState('')
    const [score, SetScore] = useState('')
    const [message, setMessage] = useState('1 time to Mine Here')
    const [load, setLoad] = useState('load1')
    const [load1, setLoad1] = useState('load2')
    const [load2, setLoad2] = useState('load3')
    const [error, setError] = useState('')


    
    function loader() {
        setLoad("load3-outer")
        setLoad1("load3-inner")
        setLoad2("load-inner")
    }

    function stop() {
        setLoad('load1')
        setLoad1('load2')
        setLoad2('load3')
    }

    

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


  const coinRef = data.ref(`coin4`)

    useEffect(()  =>{ 
            coinRef.on('value', (snapshot) => {
            if (snapshot.exists) {
                SetScore(snapshot.val())

            } else {
                console.error()
            }
            
        })

    }, [])

    useEffect(() => {
    
        if (info.time <= 0){
            window.location.reload()
        }
    
      }, [info])

    


    
    useEffect(() => {
        if(score.coin >= 4001) {
            db.ref('coin4')
            .set({
                coin:0
            })
        }
    }, [score])

    let number = score.coin
    let num = 0


        
  let earn = info.earnings
  let timing = info.time
  let mines = 0
  let timer = 0



    async function minednumber () {
        switch (number) {

            case 200:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.002

                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.0020!!!')
                    stop()
                    setShow(true)

                }, 10000);

            break;

            case 500:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.002

                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.0020!!!')
                    stop()
                    setShow(true)
                    
                }, 10000);

            break;

            case 1000:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.03
                
                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.030!!!')
                    stop()
                    setShow(true)
                    
                }, 10000);

            break;

            case 2000:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.002

                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.002!!!')
                    stop()
                    setShow(true)
                    
                }, 10000);

            break;

            case 3000:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.03

                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.03!!!')
                    stop()
                    setShow(true)
                    
                }, 10000);

            break;

            case 4000:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.45

                setTimeout(() => {
                    setMessage('CONGRATS! YOU MINED ETH 0.45!!!')
                    stop()
                    setShow(true)
                    
                }, 10000);

            break;

            default:
                timer -= 1
                loader()
                num += 1
                setMessage('Mining...')
                setShow(false)
                mines += 0.00002

                setTimeout(() => {
                    setMessage('YOU MINED ETH 0.0002!!!')
                    stop()
                    setShow(true)

                }, 10000);

            break;
        }

        
        earn = (earn + mines)
        timing = (timing + timer)
        number =(number + num)

        let earn2 = earn.toFixed(5)

        

        try {
             await coinRef.update({
                 coin: number
                })
                initializeData.doc(currentUser.uid)
                .update({
                    time: timing,
                    earnings: (Number(earn2))
                })
        } catch {
             console.log('error')
        }
    }


    return(
        <div>
            <Headbar />
        <div className= "body-min">
            <div className="welcome">
            <h2>Welcome,</h2>
            </div>


            <div className="earnings1">
                <h4>Time Left:  <Time /></h4>
            </div>

            <div className="text-danger"><h5>{error}</h5></div>
            <div className="message-field"><h3>{message}</h3></div>
             
            <div>
                <div className='body' >
                <div class={load}>
                    <div class={load1}>
                        
                    <div className={load2}>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                    


            {show && <p> <div className="button-div">
                <button 
                className="btn6 "
                onClick={minednumber}
                ><h4>Start Mine</h4></button>
            </div></p>}


            </div>
           

        </div>
    );
}

export default Forth;