import React, {  useEffect, useState } from 'react';
import authentication from '../Firebase/Firebase.init';
import { getAuth, signInWithPopup,signOut, GoogleAuthProvider , onAuthStateChanged } from "firebase/auth";


authentication()

const useFirebase = () => {

    const [user , setUser] = useState()
    const [isLoading , setIsLoading] = useState(true)
    const auth = getAuth();

    const signUpWithGoogle =()=>{
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
       .then(result => {
        setIsLoading(true)
        setUser(result.user)
        })
        
    }

       useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth , user =>{
             if (user){
                 setUser(user)
             }
             else{
                 setUser({})
             }
             setIsLoading(false);
         })
         return () => unsubscribed;
     },[])

       const logOut =()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    

    return {
        user,
        logOut,
        signUpWithGoogle,
        isLoading,
        setIsLoading
    };
};

export default useFirebase;