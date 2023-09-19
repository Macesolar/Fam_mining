import React, { useRef, useState } from "react";
import img from '../Img/logo3.png'
import './reg.css'
import { useAuth } from './Context/AuthContext'
import { useHistory } from 'react-router-dom'


function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [Loading, setLoading] = useState(false)
    const history = useHistory()
    const [show, setShow] =useState('password')
    const [show1, setShow1] = useState(true)



    function password() {
        setShow1(!show1)

        if(show1 === true) {
            setShow('text')
        } else {
            setShow('password') 
        }

    }

    function stop (e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
            setError('Password do not match')
            setTimeout(() => {
                history.replace('/signup')
                setError('')
                
              }, 5000);
            
        } else {
            setError('')
            setLoading(false)
            handleSubmit(e)
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
            await signup( emailRef.current.value, passwordRef.current.value)
            history.push("/register")
        } catch {
            setError('Failed to create an Account')
        }

        setLoading(false)
    }

    

    let url = '/'
    let url1 = '/login'
    let url2 = '/terms-and-conditions'
    let url3 = "/privacy-policy"
    

    return(
        <div>
            <div class="log-in-reg" >
                <a href={url}> <img src={img} alt="logo" width="45%" /></a>
                <h1>Sign Up</h1>
                <div class="log-elements-reg">
                    <div className="text-danger">{error}</div>
                    <form onSubmit={stop}>
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
                    <input
                        class="form-control me-2"
                        type={show}
                        placeholder="Confirm Password"
                        aria-label="confirm password"
                        ref={passwordConfirmRef}
                        required
                    />
                    <div class="container-fluid" id="password">
                        <p class="password1">
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            onChange={password}
                        />Show Password
                        </p>
                        <p class="password2"></p>
                    </div>

                    <p>
                        <input type="checkbox" name="" id="checkbox" required />I agree to
                        the {}
                         <a href={url2}
                        >terms and conditions {}</a>
                        & <a href= {url3}>privacy policy</a>.
                    </p>
                    <button
                        class="reg-btn btn btn-outline-primary"
                        type="submit"
                        disabled={Loading}
                    >
                        Continue
                    </button>
                    </form>
                </div>

                <p>
                    Already have an account?{" "}
                    <strong><a href={url1}>Log in </a></strong>
                </p>
                </div>
        </div>
    );
}

export default Signup;