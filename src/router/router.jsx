import {HOME_PAGE, LOGIN_PAGE, POST_PAGE, REGISTER_PAGE} from './consts'
import Home from "../pages/home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Posts from "../pages/Posts/Posts";


export const publicRoutes = [
    {
        path: HOME_PAGE,
        component: <Home />,
    },
    {
        path: LOGIN_PAGE,
        component: <Login />,
    },
    {
        path: REGISTER_PAGE,
        component: <Registration />,
    },
    {
        path: POST_PAGE,
        component: <Posts />,
    }
]

export const authRoutes = [];