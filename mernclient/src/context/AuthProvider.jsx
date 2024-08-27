import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext =createContext();
const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  const createUser =(email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginwithGoogle=() =>{
    setLoading(true);
    return signInWithPopup(auth, googleprovider)
  }
  
  const login=( email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const logOut= () =>{
    return signOut(auth)
  }



  const authInfo= {
    user,
    createUser,
    loginwithGoogle,
    loading,
    login,
    logOut
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider

