import React, { useContext, useState } from 'react'
import { createContext } from 'react'
// import {getAuth} from "firebase/auth"
import { auth } from '../firebse';
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,sendPasswordResetEmail } from 'firebase/auth';


const userContext=createContext();
// const auth=getAuth()

export function useAuth(){
    return useContext(userContext);

}

export const AuthContext=(props)=>{

    const [currentUser,setCurrentUser]=useState([]);

   

    const signup=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email, password);
    }

    const SignIn=(email,password)=>{
         return signInWithEmailAndPassword(auth,email, password)
    }

    const SignOut=()=>{
        return signOut(auth)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(email)
      }
    
      function updateEmail(email) {
        return currentUser.updateEmail(email)
      }
    
      function updatePassword(password) {
        return currentUser.updatePassword(password)
      }
   
    const data={
        currentUser,
        setCurrentUser,
        SignIn,
        signup,
        SignOut,
        resetPassword,
        updateEmail,
       updatePassword
    }

    return(
        
        <userContext.Provider value={data}>
            {props.children}
        </userContext.Provider>
    )
}
