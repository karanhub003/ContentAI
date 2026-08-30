import React from 'react'
import Dashboard from './pages/dashboard/Dashboard'
import DashboardLayout from './components/layout/DashboardLayout'
import AIWriter from './pages/Ai Wirter/AIWriter'



export default function App() {
  return (
     <DashboardLayout>
      {/* <Dashboard/> */}
      <AIWriter/>
     </DashboardLayout>
  )
}
