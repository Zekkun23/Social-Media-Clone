import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import "./style.scss"

import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    Navigate,
  } from "react-router-dom";
  import Navbar from "./components/Navbar/Navbar"
  import Leftbar from "./components/Leftbar/Leftbar"
  import Rightbar from "./components/Rightbar/Rightbar"
  import Home from "./pages/Home/Home"
  import Profile from "./pages/Profile/Profile"
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

    //Importing all required stuff to make the code work

function App(){
    const {currentUser} = useContext(AuthContext);
    //Basically code that checks if the local storage has any users stored.

    const queryClient = new QueryClient()
    
    const Layout = ()=>{
        return(
            <QueryClientProvider client={queryClient}>

            <div>
                <Navbar/>
            
                <div style={{display:"flex"}}>
                <Leftbar />
                <div style={{flex:6}}>
                    <Outlet />
                </div>
                <Rightbar />
                </div>

            </div>
            </QueryClientProvider>
        )
    };
    //Code used to keep all navbars the same regardless of page.

    const ProtectedRoute = ({children}) =>{
        if(!currentUser){
            return <Navigate to="/Login"/>
        }

        return children
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            children:[
                {
                    path:"/",
                    element:<Home/>
                },
                {
                    path:"/Profile/:id",
                    element:<Profile/>
                },
            ]
        },
        
        {
          path: "/Login",
          element: <Login/>,
        },
        {
            path: "/Register",
            element: <Register/>,
          },
      ]);
    //Code used to change pages on the Register/Login screen.
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;