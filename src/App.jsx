import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bot from "./Pages/Bot";
import Signup from "./Pages/Signup"
import RealSignup  from './Pages/RealSignup';
import Landing from './Pages/Landing'
import LangOpt  from './Pages/LangOpt';
import BotHindi from './Pages/BotHindi'


import './App.css'

export default function App() {
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/bot' element={<Bot/>}/>
      <Route path='/bothindi' element={<BotHindi/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/realsignup' element={<RealSignup/>} />
      <Route path='/landing' element={<Landing/>} />
      <Route path='/langopt' element={<LangOpt/>} />
    </Routes>
    </div>
  )
}


//Route path='/' element={<Home/>}/>