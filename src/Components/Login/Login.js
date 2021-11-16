import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './login.css';
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="your mail" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                    <br />



                </form>
                <p>new ? <Link to="/register">Create Account</Link> </p>



                <div>--------</div>
                <button onClick={signInUsingGoogle} className="btn-regular">Google Sign In</button>

            </div>


        </div>
    );
};

export default Login;