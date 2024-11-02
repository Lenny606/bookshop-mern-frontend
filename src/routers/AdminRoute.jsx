import {useAuth} from "../context/auth/AuthContext.jsx";
import {Navigate, Outlet} from "react-router-dom";

export const AdminRoute = ({children}) => {
    //check if token
    const token = localStorage.getItem('token'); //TODO refactor
    if (!token) {
        return <Navigate to={'/admin'}/>
    }

    return children ? children : <Outlet />
}