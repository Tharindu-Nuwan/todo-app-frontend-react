import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import Home from "./components/home/Home";
import AddTask from "./components/add-task/AddTask";
import UpdateTask from "./components/update-task/UpdateTask";
import Main from "./components/app/Main";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

const routes: RouteObject[] = [
    {
        path: 'home',
        Component: Home,
    },
    {
        path: 'add-new',
        Component: AddTask
    },
    {
        path: 'update/:id/:title/:description',
        Component: UpdateTask
    }
];

const homeRoutes: RouteObject[] = [
    {
        path:'',
        Component: Login
    },
    {
        path: 'login',
        Component: Login
    },
    {
        path: 'signup',
        Component: Signup
    },
    {
        path: 'app',
        Component: Main,
        children: routes,
        loader: ()=>{
            const user = localStorage.getItem('token');
            if (user) {
                return null;
            } else {
                return redirect('/login');
            }
        }
    }
];

export const router = createBrowserRouter(homeRoutes);