import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { AuthContextProvider } from './context/AuthContext'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />  
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/account' element={<Account />}/>

        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App