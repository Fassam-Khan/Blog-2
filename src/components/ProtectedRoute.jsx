import React from 'react'
import { useState, useEffect } from 'react';
import {  Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

const ProtectedRoute =  () => {
    const [User, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
    
            } else {
              console.log("No user");
              setUser(null)
            }

            setLoading(false)
            
          });


        return () => unsubscribe();
    }, [])


    if(Loading){
        return <p>Loading...</p>
    }
    
    return User? <Outlet/> : <Navigate to={'/login'}/>

    

  
  
}

export default ProtectedRoute
