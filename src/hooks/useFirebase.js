import {getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from 'react';
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
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
                console.log('inside state change',user);
            }
        })
    },[])
   
    return {
        user,error,signInUsingGoogle
    }
}
export default useFirebase;
