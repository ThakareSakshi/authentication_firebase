import React,{useEffect} from 'react'
import { useAuth } from './UserContext'
import { Navigate, useNavigate} from 'react-router-dom';




const Dashboard = () => {
    const authCtx = useAuth();
    const navigate=useNavigate();
  
    // useEffect(()=>{
    // if (authCtx.currentUser.length == 0) {
    //       navigate("/signin");
    //       console.log(authCtx);
    //       return;
    //   } else {
    //   }
    // })

    const accountLogout=()=>{
        authCtx.setCurrentUser([]);
        authCtx.SignOut();
    }


    if (authCtx.currentUser.length == 0) {
       <Navigate to="/signin"/>
        console.log(authCtx);
        return;
    } 
  return (
    <div>
        this is dashBoard
        <div>
        {
            authCtx.currentUser.user.email
        }
        </div>
        <button className='p-2 bg-sky-600 text-white rounded-md' onClick={accountLogout}>logOut</button>
       
      
    </div>
  )
}

export default Dashboard
