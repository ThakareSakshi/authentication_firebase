import React from 'react'
import { useRef } from 'react'
import { useAuth } from './UserContext';
import { Link, useNavigate } from 'react-router-dom';



const SignUp = () => {

    const LoginValue=useRef();
    const PasswordValue=useRef();
    const confirmPassword=useRef();
    const authCtx=useAuth();
    const navigate=useNavigate()

    const signUP=async(e)=>{
      e.preventDefault()
      console.log(LoginValue.current.value,PasswordValue.current.value)

        if(PasswordValue.current.value!==confirmPassword.current.value){
           console.log(LoginValue.current.value,PasswordValue.current.value)
          
            return 
        }else{
           try{
            const response=await authCtx.signup(LoginValue.current.value,PasswordValue.current.value);
            authCtx.setCurrentUser(response) ;
            navigate("/signin")
          
           }catch(e){
              console.log(e)
           }
        }
    }
  return (
    <div className='w-1/2 shadow-md'>
      <form onSubmit={signUP} className='border-2 border-solid  flex flex-col gap-2 p-4'>
      <h1 className='text-3xl font-semibold text-center'>Sign Up</h1>
      <label>Email</label>
      <input type='email' ref={LoginValue} className='border-2 border-solid shadow-sm mb-2 p-2' required/>

      <label>password</label>
      <input type='password' ref={PasswordValue} className='border-2 border-solid shadow-sm mb-2 p-2' required/>

      <label>Confirm password</label>
      <input type='password' ref={confirmPassword} className='border-2 border-solid shadow-sm mb-2 p-2' required/>

      <button type='submit' className='p-2 bg-sky-600 text-white rounded-md'>Sign Up</button>
      <p className='text-center m-2'> Already have an Account?<Link to="/signin"> <span className='text-sky-900' >Sign in</span></Link></p>
      </form>
     
    </div>
  )
}

export default SignUp
