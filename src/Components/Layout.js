import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./UserContext";
import Dashboard from "./Dashboard";

const Layout = () => {
  const authCtx = useAuth();
  const navigate=useNavigate();

  useEffect(()=>{
  
    if (authCtx.currentUser.length == 0) {
        navigate("signin");
        console.log(authCtx);
        return;
    } else {
    }
  })
  
 

  return (
    <div>
     <Outlet/>
    </div>
  );
};

export default Layout;
