import { useState ,useEffect} from "react"
import axios from "../api/axios";
function User() {

    const [users,setUsers]=useState()

    useEffect(()=>{
       let isMounted=true
       const controller=new AbortController(); 

       const getUsers=async()=>{
            try {
                const res=await axios.get('/users',{
                    signal:controller.signal
                })
                console.log(res.data);
                isMounted && setUsers(res.data)
                
            } catch (error) {
                console.log(error);
                
            }
       }
       getUsers()

       return ()=>{
        isMounted=false
        controller.abort()
       }
    },[])
  return (
    <article>
        <h2>
          User lists   {users?.length?(
            <ul>
                {users.map((user,i)=> <li key={i}>{
                    user?.username}</li>)}
            </ul>
          ):<p>No users to display</p>}
        </h2>
    </article>
  )
}

export default User;