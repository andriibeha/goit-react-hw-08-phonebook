import { NavLink, Outlet } from "react-router-dom";
import Footer from "components/Footer/Froote";
import s from './Header.module.css';


const Header = () => {
    return (
        <>
            <header className={s.header}>
                <NavLink to="/" className={s.link}>Home</NavLink>
                <NavLink to="/contacts" className={s.link}>Contacts</NavLink>
                <NavLink to="/registration" className={s.link}>Registration</NavLink>
                <NavLink to="/login" className={s.link}>Login</NavLink>
                <NavLink to="/logout" className={s.link}>Logout</NavLink>
            </header>
            <main className={s.container}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Header;