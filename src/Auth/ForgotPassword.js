import React, {useRef, useState} from 'react'
import img from '../Img/logo3.png'
import './reg.css'
import { useAuth } from './Context/AuthContext'
import { useHistory } from 'react-router-dom'



function ForgotPassword() {

    let url = '/'
    let url1 = '/login'

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [Loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        

        setTimeout(() => {
            setError('')
            
          }, 5000);

        try{
            setError('')
            setLoading(true)
            await resetPassword( emailRef.current.value)
            setMessage('Check your Inbox/Spam for Further instructions')
            setTimeout(() => {
                history.push('/login')
            }, 15000);
        } catch {
            setMessage('')
            setError('Failed to reset password')
        }

        setLoading(false)
    }



    return(
        <div>

            <div>
            <div class="log-in-reg" >
                    <a href={url}>
                    <img src={img} alt="logo" width="45%"
                    /></a>
                    <h1>Password Reset</h1>
                <div class="log-elements-reg">
                    <div className="text-danger">{error}</div>
                    <div className="text-primary">{message}</div>
                    <form onSubmit={handleSubmit}>
                    <input
                        class="form-control me-2"
                        type="email"
                        placeholder="Email"
                        aria-label="email"
                        ref={emailRef}
                        required
                    />
                    
                    
                    <button
                        class="reset-btn btn btn-outline-primary"
                        type="submit"
                        disabled={Loading}
                    >
                        Reset
                    </button>
                    </form>
                </div>

                <p className="log-p">
                    Want to go Back to{" "}
                    <strong>Log in?<a href={url1}> here</a></strong>
                </p>
                </div>
        </div>
        </div>
    );
}

export default ForgotPassword;