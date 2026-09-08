import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLayout from './components/layout/DashboardLayout'
import AIWriter from './pages/Ai Wirter/AIWriter'
import Calendar from './pages/Calendar/Calendar'
import Template from './pages/Template/Template'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login/Login'



export default function App() {
  return (
    <Routes>

       <Route path="/login" element={<Login />} />
      


      <Route element={<DashboardLayout/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/ai-writer' element={<AIWriter/>}/>
          <Route path='/calendar' element={<Calendar/>}/>
          <Route path='/template' element={<Template/>}/>

      
      </Route>
      <Route path='*' element={<Navigate to="/dashboard" replace/>}/>


    </Routes>
    
  )
}
