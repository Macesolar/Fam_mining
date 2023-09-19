import React, { useState } from 'react'
import './start.css'

function Start() {
    const [load, setLoad] = useState("load3-outer")
    const [load1, setLoad1] = useState("load3-inner")
    const [load2, setLoad2] = useState("load-inner")


     

    setTimeout(() => {
        setLoad("load3-outer2")
    }, 100000)

    return (
        <div className='body'>
            <div class={load}>
                <div class={load1}>
                    
                <div className={load2}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Start