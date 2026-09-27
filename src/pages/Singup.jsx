import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Input from '../components/Input'
import Button from '../components/Button'
import ButtonMy from '../components/Button'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config.js'
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase/config.js'



const Singup = () => {
    const [Form, setForm] = useState({
        userName:"",
        email:"",
        password: ""
    })

const changeHandler = (e)=>{
    const {name, value}= e.target

setForm((prev)=> ({...prev, [name]:value}))

}



const submitHandler = async ()=>{
    try {
        if(!Form.userName.trim()){
           return toast.warning("Please enter username")
        }
        if(!Form.email.trim()){
           return toast.warning("Please enter username")
        }
        if(!Form.password.trim()){
            return toast.warning("Please enter password")
         }
         if(Form.password.length < 6 ){
            return toast.warning("Password must be 6 character ")
         }
         const response = await createUserWithEmailAndPassword(auth, Form.email, Form.password)
         console.log(response);

         await userDB(response.user.uid)

         if(response.user){
            toast.success("User created successfully")
            setForm({
                userName:"",
                email:"",
                password:""
            })


         }

        
    } catch (error) {
        console.log(error.message);
        toast.error(error.message)
        
    }
}
const userDB = async (id)=>{
    try {
        await setDoc(doc(db, "user", id), {
            userName:Form.userName,
            email:Form.email,
            password: Form.password
          });
        
    } catch (error) {
        
    }
}


    return (
        <div className='flex justify-center items-center h-screen'>
            <Paper className='w-[350px] ' sx={{
                padding:"10px"
            }}>
                <Box>
                    {/* Heading  */}
                    <h2 className='textttt-2xl font-bold text-center'>Create Your Account</h2>
                </Box>
                <Box className="mt-5">
                    <Input label={"Username"} type={'text'} handler={changeHandler} name={"userName"} />
                </Box>
                <Box className="">
                    <Input label={"Email"} type={'email'} handler={changeHandler}  name={"email"}/>
                </Box>
                <Box className="">
                    <Input label={"Create your password"} type={'password'} handler={changeHandler} name={"password"} />
                </Box>
                    <ButtonMy text={"Create Account"} handler={submitHandler} />

                    <Typography sx={{textAlign:"center", marginTop:"13px", fontSize:"16px"}}>
                        Already have account? <Link to={'/login'}>Login</Link>
                    </Typography>

            </Paper>



<ToastContainer/>
        </div>
    )
}

export default Singup
