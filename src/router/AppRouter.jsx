import {Navigate, Route, Routes} from "react-router-dom";
import {useState} from "react";
import {authRoutes, publicRoutes} from "./router";
import Home from "../pages/home/Home";

export const AppRouter = () => {

    const [isAuth, setIsAuth] = useState(false);

    return <Routes>
        {isAuth && authRoutes.map(({path, component}) => {
            return <Route key={path} path={path} element={component} />
        })}

        {publicRoutes.map(({path, component}) => {
            return <Route key={path} path={path} element={component} />
        })}

        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
}