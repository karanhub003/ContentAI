import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLayout from './components/layout/DashboardLayout'
import AIWriter from './pages/Ai Wirter/AIWriter'
import Calendar from './pages/Calendar/Calendar'
import Template from './pages/Template/Template'



export default function App() {
  return (
     <DashboardLayout>
      {/* <Dashboard/> */}
      {/* <AIWriter/> */}
      {/* <Calendar/> */}
      <Template/>
     </DashboardLayout>
  )
}
