import { createBrowserRouter } from "react-router-dom"
import Root from "../layouts/Root"
import Home from "../pages/Home"
import Login from "../pages/Login/Login"
import Register from "../Register/Register"
import Profile from "../pages/Profile/Profile"
import NewsDetails from "../pages/News/NewsDetails"
import PrivateRouter from "../pages/PrivateRouter/PrivateRouter"


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children:([
        { 
            path: '/',
            element: <Home></Home>,
            loader: ()=>fetch('/news.json')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/newsDd/:id',
            element: <PrivateRouter><NewsDetails></NewsDetails></PrivateRouter>,
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/profile',
            element: <Profile></Profile>
        }
        
        ])
    }
])
export default router