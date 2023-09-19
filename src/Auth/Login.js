import React, { useEffect, useRef, useState} from 'react'
import img from '../Img/logo3.png'
import './reg.css'
import { useAuth } from './Context/AuthContext'
import { useHistory } from 'react-router-dom'


function Login() {

    let url = '/'
    let url1 = '/signup'
    let url2 = '/forgot-password'

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, currentUser } = useAuth()
    const [Loading, setLoading] = useState(false)
    const history = useHistory()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [show, setShow] =useState('password')
    const [show1, setShow1] = useState(true)

    useEffect(() => {
        if (currentUser != null) {
            setMessage('You are already Logged in!!!')
            setTimeout(() => {
                history.push('/profile')
                
            }, 1000);
        }
    }, [currentUser, history])

    function password() {
        setShow1(!show1)

        if(show1 === true) {
            setShow('text')
        } else {
            setShow('password') 
        }

    }

    

    


    async function handleSubmit(e) {
        e.preventDefault()

        setTimeout(() => {
            setError('')
            
          }, 5000);

        try{
            setError('')
            setLoading(true)
            setMessage('Please wait...')
            await login( emailRef.current.value, passwordRef.current.value)
            setMessage('Login Successful!!')
            history.push("/profile")
        } catch {
            setError('Invalid Email/Password !!!')
            setMessage('')
        }

        setLoading(false)
    }
    

    // const handle = () => {
    //     localStorage.setItem('email', emailRef)
    //     localStorage.setItem('password', passwordRef)
    // }

    // const remove = () => {
    //     localStorage.removeItem('email', emailRef)
    //     localStorage.removeItem('password', passwordRef)
    // }


    return(

            <div>
            <div class="log-in-reg" >
                <a href={url}> <img src={img} alt="logo" width="45%" /></a>
                <h1 className="h1">Welcome Back!</h1>
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
                    <input
                        class="form-control me-2"
                        type={show}
                        placeholder="Password"
                        aria-label="password"
                        ref={passwordRef}
                        required
                    />
                    
                    <div class="container-fluid" id="password">
                        <p class="password1"   className="log-box">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={password}
                        />Show password
                        </p>
                        <p class="password2">
                        <a href={url2}>Forgot Password?</a>
                        </p>
                    </div>
                    <button
                        class="reg-btn btn btn-outline-primary"
                        type="submit"
                        disabled={Loading}
                    >
                        Log in
                    </button>
                    </form>
                </div>

                <p className="log-p">
                    Don't have an account?{" "}
                    <strong>Sign up<a href={url1}> here</a></strong>
                </p>
                </div>
        </div>

    

        
    );
}

export default Login;