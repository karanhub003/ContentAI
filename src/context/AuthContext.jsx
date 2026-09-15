import React, { createContext, useEffect, useState } from 'react'
import supabase from '../lib/supabase'

export const AuthContext=createContext(null)

export default function AuthContextProvider({children}) {
    const [session,setSession]=useState(null)
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error.message);
    }
  };
    
    
    useEffect(()=>{
    const getInitialSession =async()=>{
     
     const{data,error}= await supabase.auth.getSession()
    
     if(error){
        console.log(error.message);
     }
     setSession(data.session)
     setUser(data.session?.user?? null)
     setLoading(false)

    
}
getInitialSession();

    const{data:{subscription},} =supabase.auth.onAuthStateChange((event,session)=>{
        setSession(session);
        setUser(session?.user??null)
    });

    return()=>{
        subscription.unsubscribe();
    }

  

    },[])




  return (
    <AuthContext.Provider value={{session,user,loading,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
