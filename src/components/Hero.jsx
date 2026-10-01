import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMy from './Button'

const Hero = () => {
    return (
        <div className='w-full md:h-[200px] bg-black text-white flex justify-center items-center py-6'>
            <div className='text-center flex flex-col md:gap-4 items-center justify-center '>
                <h1 className='md:text-4xl text-2xl font-bold ml-4'>Blogging Web!</h1>
                <p>Start sharing your thoughts </p>
                <Link to={'/dashboard/add-blog'}>
                <ButtonMy text={"Create Blog"}/>
                </Link>

            </div>



        </div>
    )
}

export default Hero
