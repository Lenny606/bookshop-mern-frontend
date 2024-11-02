import {useAuth} from "../context/auth/AuthContext.jsx";
import {Navigate} from "react-router-dom";

export const PrivateRoute = ({children}) => {

    //check if user is logged
    const {currentUser, loading: isLoading } = useAuth()

    if (isLoading) {
        return <div>Loading... </div> //TODO refocator to nice lOader
    }



    if (currentUser) {
        return children
    }

    return <Navigate to={"/login"} replace/>
}