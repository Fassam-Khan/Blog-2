import React from 'react'
import { Link } from 'react-router-dom'

const DashboardHome = () => {
  return (
    <div>
        <h1>I am home</h1>
        <Link to={'/dashboard/add-blog'} className='bg-black text-white px-2  mt-8'>Add a Blog</Link>
      
    </div>
  )
}

export default DashboardHome
