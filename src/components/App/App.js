import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../pages/Home/Home";
import Contacts from "../pages/Contacts/Contacts"
import Registration from "../pages/Registarion/Registarion";
import Login from "../pages/Login/Login";
import Logout from "../pages/Logout/Logout";
import NotFound from "../pages/NotFound/NotFound";
import s from './App.module.css';


function App() {
    return (
        <>
            <Routes className={s.container}>
                <Route path="/" element={<Header />}>
                    <Route index element={<Home />} />
                    <Route path="contacts" element={<Contacts />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
};

export default App;


