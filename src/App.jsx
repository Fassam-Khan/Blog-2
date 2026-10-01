import React from 'react'
import {BrowserRouter, Route, RouterContextProvider, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Singup from './pages/Singup'
import Login from './pages/Login'
import Dashbaord from './pages/Dashbaord'
import ProtectedRoute from './components/ProtectedRoute'
import AddBlog from './pages/AddBlog'
import DashboardHome from './pages/DashboardHome'
import SingleBlog from './pages/SingleBlog'

const App = () => {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Singup/>} path='/singup'/>
      <Route element={<Login/>} path='/login'/>
      <Route element={<SingleBlog/>} path='/blog/:slug'/>
      <Route element={<ProtectedRoute/>} >
        <Route path='dashboard' element={<Dashbaord/>}>
                    <Route path='home' element={<DashboardHome/> }/>

          <Route path='add-blog' element={<AddBlog/>}/>

        </Route>

      </Route>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
