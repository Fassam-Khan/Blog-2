import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Input from '../components/Input'
import Button from '../components/Button'
import ButtonMy from '../components/Button'
import { Link, Navigate, href, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config.js'
import { db } from '../firebase/config.js'




const Singup = () => {
    const [Form, setForm] = useState({
        email:"",
        password: ""
    })

    const navigate = useNavigate()

const changeHandler = (e)=>{
    const {name, value}= e.target

setForm((prev)=> ({...prev, [name]:value}))

}



const submitHandler = async ()=>{
    try {

        if(!Form.email.trim()){
           return toast.warning("Please enter username")
        }
        if(!Form.password.trim()){
            return toast.warning("Please enter password")
         }
         if(Form.password.length < 6 ){
            return toast.warning("Password must be 6 character ")
         }
         const response = await signInWithEmailAndPassword(auth, Form.email, Form.password)
         console.log(response);

         if(response.user){
            toast.success("User login successfully")
            setForm({
                email:"",
                password:""
            })
            navigate('/dashboard/home')
          


         }

        
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
        
    }
}



    return (
        <div className='flex justify-center items-center h-screen'>
            <Paper className='w-[350px] ' sx={{
                padding:"10px"
            }}>
                <Box>
                    {/* Heading  */}
                    <h2 className='textttt-2xl font-bold text-center'>Login</h2>
                </Box>
                
                <Box className="">
                    <Input label={"Email"} type={'email'} handler={changeHandler}  name={"email"}/>
                </Box>
                <Box className="">
                    <Input label={"password"} type={'password'} handler={changeHandler} name={"password"} />
                </Box>
                    <ButtonMy text={"Login"} handler={submitHandler} />

                    <Typography sx={{textAlign:"center", marginTop:"13px", fontSize:"16px"}}>
                        Not have a account? <Link to={'/singup'}>Click me</Link>
                    </Typography>

            </Paper>



<ToastContainer/>
        </div>
    )
}

export default Singup
