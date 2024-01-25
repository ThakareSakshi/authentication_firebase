import logo from './logo.svg';
import './App.css';
import SignUp from './Components/SignUp';
import { AuthContext } from './Components/UserContext';
import SignIn from './Components/SignIn';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Layout from './Components/Layout';


function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>
      }
    ]
  },{
    path:"/signin",
    element:<SignIn/>
  }
  ,{
    path:"/signup",
    element:<SignUp/>
  }]
)
  
  return (
    <div className="App ">
      
      <AuthContext>
      <RouterProvider router={router}>
      </RouterProvider>
      </AuthContext>
      
    </div>
  );
}

export default App;
