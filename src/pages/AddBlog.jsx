import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import Input from '../components/Input'
import MultilineTextFields from '../components/MultiLine'
import ButtonMy from '../components/Button'
import { useState, useEffect } from 'react'
import {toast, ToastContainer} from "react-toastify"
import { db , auth} from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"; 
import {uploadImage} from '../components/UploadFile'


const AddBlog = () => {
    const [Blog, setBlog] = useState({
        title:"",
        description: "",    
        file:""
    })
    const [User, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [Loading2, setLoading2] = useState(false)

    const userDB = async (imgUrl)=>{
        try {
            await setDoc(doc(db, "Blogs", Blog.title), {
                title:Blog.title,
                description: Blog.description,
                img_url: imgUrl,
                Author: User.uid
              });

              return true
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
            
        }
    }

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

    const changeHandler = (e)=>{
        const {name , value, files} = e.target
        if(name === "file"){
            setBlog((prev)=> ({...prev, file:files[0]}))        }
        else{
            setBlog((prev)=> ({...prev, [name]:value}))

        }



    }

    const submitHandler =async ()=>{
        setLoading2(true)

        try {

            const imgUrl = await uploadImage(Blog.file)



            if(!Blog.title.trim()){
                return toast.warning("please enter title")
            }
            if(!Blog.description.trim()){
                return toast.warning("please enter description")
            }
            console.log(Blog);
           const success = await userDB(imgUrl)
           if(success){
            setBlog({
                title: "",
                description:""
            })
            toast.success("Blog created successfully")
           }
          
           
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
            
        }finally{
            setLoading2(false)
        }

       
    }
  return (
    <div>

        <Paper className='px-3 py-2 md:w-[60%]'>
            <div>
                <Box>
                    <Input type={"text"} name={'title'}  label={"Add Title"} handler={changeHandler}/>
                </Box>
                <Box className="mt-6">
                    <MultilineTextFields label={"Add description"} name={"description"} handler={changeHandler}/>
                </Box>
                <Box className="mt-4">
                    <Input type={"file"} name={"file"} handler={changeHandler}/>
                </Box>
                <Box >
                    <ButtonMy text={setLoading2 == true ?  "Loading":"Submit "} handler={submitHandler}/>
                </Box>
              
            </div>
        </Paper>
        
<ToastContainer/>
      
    </div>
  )
}

export default AddBlog
