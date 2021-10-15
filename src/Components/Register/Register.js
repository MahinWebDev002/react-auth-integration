import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    
    return (
        <div>
           <h2>Please Register</h2>
           <input type="email" />
           <br />
           <input type="password" />
           <br />
           <input type="submit" value="Submit" />
           <br />
           <Link to='/login'>Already registered!</Link>
        </div>
    );
};

export default Register;