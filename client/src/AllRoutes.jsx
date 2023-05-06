import React from 'react'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from './pages/Questions/DisplayQuestion'
import Tags from './pages/Tags/Tags'
import {Routes,Route} from 'react-router-dom'
import Users from './pages/Users/Users'
import UserProfiles from './pages/UserProfiles/UserProfiles'


const AllRoutes= () => {
  return (
   
        <Routes>
            <Route path='/Auth' element={<Auth/>}/>
           <Route path='/' element={<Home/>}/>
           <Route path='/Questions' element={<Questions/>}/>
           <Route path='/AskQuestion' element={<AskQuestion/>}/>
          <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
          <Route path='/Tag' element={<Tags/>}/>
          <Route path='/Users' element ={<Users/>}/>
          <Route path='/Users/:id' element={<UserProfiles/>} />

        </Routes>
   
  )
}

export default AllRoutes;
