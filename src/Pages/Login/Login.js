import React from 'react';
import './Login.css'
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { signUpWithGoogle, setIsLoading} = useAuth()

    const location = useLocation()
    const history = useHistory()
    const redirect = location.state?.from || '/home'
   

    const handleGoogle = () =>{
        signUpWithGoogle()
        .then(result =>{
            console.log(result)

            setIsLoading(true)
            history.push(redirect)
        })
        .finally(()=>{
            setIsLoading(false)
        })
    }

    return (
        <div className="login-form">
            <div className="m-5">
            <h1>Login</h1>
                <input  className="input m-3 p-2 w-25 rounded-pill" type="email" placeholder="Email" required/>
                <br />
                <input  className="input m-3 p-2 w-25 rounded-pill" type="password" placeholder="Password" required/>
                <br />
                <br />
                <br />
                <input className="input m-3 p-2 text-white fw-bold fs-5  w-25 bg-danger" type="submit" value="Submit" />
                
            </div>
            <button className="btn btn-secondary px-5 py-3  rounded-pill" onClick={handleGoogle}>  Google</button>
        </div>
    );
};

export default Login;