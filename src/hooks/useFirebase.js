import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication()

const useFirebase=()=>{
    const [user,setUser]=useState({ })
    const [error,setError]=useState(' ')
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider()
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            console.log(result.user);
        }).catch(error=>{
            setError(error.message)
        })
    }
   
    return {
        user,error,signInUsingGoogle
    }
}
export default useFirebase;
