import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SettingPage from './pages/SettingPage'
import ProfilePage from './pages/ProfilePage'
import HomePage from './pages/HomePage'
import { useAuthStore } from './store/useAuthStore.js'

const App = () => {

  const {authUser, checkAuth} = useAuthStore()

  useEffect(()=>{
    checkAuth()
  }, [checkAuth]);
  console.log(authUser);
  
  return (
    <div>
      <Navbar />

      <Routes>
         <Route path='/' element={<HomePage />} />
         <Route path='/signup' element={<SignupPage />} />
         <Route path='/login' element={<LoginPage />} />
         <Route path='/setting' element={<SettingPage />} />
         <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App