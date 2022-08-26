import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshCurrentUser } from "store/userReducer";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts"
import Registration from "../pages/Registarion/Registarion";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import NotFound from "../pages/NotFound/NotFound";
import s from './App.module.css';



function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshCurrentUser())
     }, [dispatch])

    return (
        <>
            <Routes className={s.container}>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;


