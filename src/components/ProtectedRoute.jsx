import React from 'react'
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute() {
    const {session,loading}=useContext(AuthContext)

  if(loading){
    return <div>Loading...</div>
  }
  if(!session){
    return <Navigate to="/auth" replace/>
  }

  return <Outlet/>


}
