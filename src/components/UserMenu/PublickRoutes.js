import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PublickRoutes = () => {
    const { isloggedIn } = useSelector(state => state.userSlice);

    return isloggedIn
        ? <Navigate to="/contacts" replace />
        : <Outlet />
};

export default PublickRoutes;
