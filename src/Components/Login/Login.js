import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


const Login = () => {
    const {signInUsingGoogle,signInUsingGitHub,error}=useFirebase()
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign in</button>
            <br />
            <button onClick={signInUsingGitHub}>GitHub Sign in</button>
            <br />
            <h4 className='text-danger text-center'>{error}</h4>
            <Link to='/register'>New user?</Link>
        </div>
    );
};

export default Login;