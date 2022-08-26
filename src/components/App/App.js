import { Route, Routes } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";
import { useEffect } from "react";
import { refreshCurrentUser } from "store/userReducer";
import PrivateRoutes from "components/UserMenu/PrivateRoutes";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts"
import Registration from "../pages/Registarion/Registarion";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import NotFound from "../pages/NotFound/NotFound";
import s from './App.module.css';
import PublickRoutes from "components/UserMenu/PublickRoutes";




function App() {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(state => state.userSlice.isRefreshing);

    useEffect(() => {
        dispatch(refreshCurrentUser())
     }, [dispatch])

    return (
        !isRefreshing && (
            <>
            <Routes className={s.container}>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="/" element={<PrivateRoutes />}>
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="logout" element={<Logout />} />
                    </Route>
                    <Route path="/" element={<PublickRoutes />}>
                        <Route path="registration" element={<Registration />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            </>
        )
    );
};

export default App;


