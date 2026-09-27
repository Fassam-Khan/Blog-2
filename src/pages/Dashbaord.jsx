import React from 'react'
import AdminHeader from '../components/AdminHeader'
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'
import Box from '@mui/material/Box'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashbaord = () => {
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


  return (
    <div>
      <AdminHeader data={User}/>

      <Box className="flex  ">
        <Box className="md:block hidden">
        <Sidebar />

        </Box>

        {/* Main Box  */}

        <Box className="bg-[#F5F5F5] h-screen overflow-hidden px-4 py-2  w-full">
          <Outlet/>



        </Box>
      </Box>
        
    </div>
  )
}

export default Dashbaord
