import { NavLink, Outlet } from "react-router-dom";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Footer from "components/Footer/Froote";
import { useSelector } from "react-redux";
import s from './Header.module.css';


const Header = () => {
    const isloggedIn = useSelector(state => state.userSlice.isloggedIn);
    
    return (
        <>
            <header className={s.header}>
                <NavLink to="/" className={s.link}>Home</NavLink>
                {isloggedIn ?
                    <UserMenu />
                    :
                    <AuthNav />
                }
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