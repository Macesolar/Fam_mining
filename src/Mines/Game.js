import React, { useEffect, useLayoutEffect, useState } from "react";
import img from '../Img/eth.png'
import './min.css';
import { auth, data } from '../Firebase'
import Headbar from "../Main/Headbar";




function Game() {
    const [num, setNum] = useState(0)
    const [show, setShow] = useState(false)
    const [currentUser, setCurrentUser] = useState() 
    const [info, setInfo] = useState([])
    const [put, setPut] = useState('')
    const [load, setLoad] = useState("load3-outer")
    const [load1, setLoad1] = useState("load3-inner")
    const [load2, setLoad2] = useState("load-inner")
    const [message, setMessage] = useState('hello')

    
    // let item= [0,1,2,3,4,5,6,7,8,9]

    let playerid =[];
    let playerRef;
    let pol = 0



    useEffect(() =>{
        auth.onAuthStateChanged((user) => {
            console.log(user)
            setCurrentUser(user)
        })
    }, [])

    useEffect(()  =>{
        auth.signInAnonymously().catch(alert)

    }, [])

    useEffect(() => {
        setTimeout(() => {
            
        if(currentUser === null) {
            window.location.reload()
        }
        }, 3000);
    }, [])
    

     const allCoinsRef = data.ref('coins')

    useEffect(()  =>{ 
        allCoinsRef.on('value', (snapshot) => {
            if (snapshot.exists) {
                setPut(snapshot.val())

            } else {
                console.error()
            }
            
        })

    }, [])

   
    
    
    useLayoutEffect(() => {
        if(put.mum === 9) {
            allCoinsRef.set({
                mum:0
            })
        }
    }, [put])

    let newmum = put.mum
    
    

    async function minednumber () {
            
        switch(newmum) {
            case 1:
                    kip +=1
                    pol +=1
                    stop()
            break;


            case 2:
                    kip +=3
                    pol +=1
                    stop()

            break;




            default:

            kip -=2
            pol +=1
            stop()

            break;
        }

        setNum(num + kip)
        newmum = (newmum + pol)

        const coinRef = data.ref(`coins`)
       try {
            await coinRef.update({
                mum: newmum
       })
       } catch {
            console.log('error')
       }
    }


    useEffect(() =>{
        if (currentUser) {
            playerid = currentUser.uid
            playerRef = data.ref(`players/${playerid}`)

            playerRef.set({
                id: playerid,
                name: 'draw',
                direction: 'up',
                color: 'white',
                mines: 0

            })

            playerRef.onDisconnect().remove()
        }


    }, [currentUser])

    
   

     const allPlayersRef = data.ref('players')

    // allPlayersRef.on("value", (snapshot) => {
    //     //when change occurs (joins or leaves)
    // })
    useEffect(() => {
    allPlayersRef.on("child_added", (snapshot) => {
        //when a new node is added to the tree (player joins, this added a player to the existing game)
        const addedPlayer = snapshot.val()

        if (addedPlayer.id === playerid) {
            setInfo(addedPlayer.mines)
        } else {
            console.error();
        }
    })

}, [currentUser])
    console.log(info)

    let kip = 0

    function stop() {
        setLoad('load1')
        setLoad1('load2')
        setLoad2('load3')
    }

    return(
        <div>
            <Headbar />
            <div className= "body-min">
                <div className="welcome">
                <h2>Welcome,</h2>
                </div>

                <div className="earnings">
                    <h4>Your Earnings:  <img src={img} alt="eth"  width='30px' height='30px' />{num}</h4>
                </div>

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
                    
            <div className="button-div">
                <button 
                className="btn6 "
                onClick={minednumber}><h4>Start Mine</h4></button>
            </div>

                </div>
            </div>
        
    );
}

export default Game;