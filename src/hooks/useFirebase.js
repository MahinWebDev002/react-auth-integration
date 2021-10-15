import {getAuth,GoogleAuthProvider,GithubAuthProvider,signInWithPopup,onAuthStateChanged,signOut} from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication()

const useFirebase=()=>{
    const [user,setUser]=useState({ })
    const [error,setError]=useState(' ')
    const auth=getAuth()
    const googleProvider=new GoogleAuthProvider();
    const gitHubProvider=new GithubAuthProvider();
    const signInUsingGoogle=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            setUser(result.user)
            setError('')
        }).catch(error=>{
            setError(error.message)
        })
    }
    const signInUsingGitHub=()=>{
        signInWithPopup(auth,gitHubProvider)
        .then(result=>{
            setUser(result.user)
            setError('')
        }).catch(error=>{
            setError(error.message)
        })
    }
    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({ })
          }).catch((error) => {
            // An error happened.
          });
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
        user,
        error,
        signInUsingGoogle,
        signInUsingGitHub,
        logOut
    }
}
export default useFirebase;
