
import { useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
function App() {

const [loading,setLoading]=useState(true)
const dispatch=useDispatch()

useEffect(()=>{
  
  authService.getCurrUser()
  .then((user)=>{
    if(user){
      dispatch(login({user}))
    }else{
      dispatch(logout())
    }
  })
  .finally(()=> setLoading(false))
},[])
 
  
  
  if(loading){
    return <div>Loading ...</div>
  }
}

export default App
