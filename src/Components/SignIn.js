import React from 'react'
import { useRef } from 'react'
import { useAuth } from './UserContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const SignIn = () => {

    const emailRef=useRef();
    const passwordRef=useRef();
    
    const authCtx=useAuth();
    const navigate= useNavigate();

    const signIn=async(e)=>{
    
      e.preventDefault();

      
           try{
            const response=await authCtx.SignIn(emailRef.current.value,passwordRef.current.value);
             console.log(response);
             authCtx.setCurrentUser(response)
              navigate('/dashboard');
            
           }catch(e){
              console.log(e)
           }
        
    }
  return (
    <div className='w-1/2 shadow-md'>
      <form onSubmit={signIn} className='border-2 border-solid  flex flex-col gap-2 p-4'>
      <h1 className='text-3xl font-semibold text-center'>Sign In</h1>
      <label>Email</label>
      <input type='email' ref={emailRef} className='border-2 border-solid shadow-sm mb-2 p-2' required/>

      <label>password</label>
      <input type='password' ref={passwordRef} className='border-2 border-solid shadow-sm mb-2 p-2' required/>

      <button type='submit' className='p-2 bg-sky-600 text-white rounded-md'>SignIN</button>
      <p className='text-center p-2 mb-4'> Need an Account? <Link to="/signup"><span className='text-sky-900' >Signup</span></Link></p>
      </form>
     
    </div>
  )
}

export default SignIn
