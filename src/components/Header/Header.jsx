import { NavLink, Outlet } from "react-router-dom";
import AuthNav from "components/AuthNav/AuthNav";
import UserMenu from "components/UserMenu/UserMenu";
import Footer from "components/Footer/Froote";
import { useSelector } from "react-redux";


const Header = () => {
    const isloggedIn = useSelector(state => state.userSlice.isloggedIn);
    
    return (
        <>
            <header className="text-2xl px-7 py-3 flex justify-between bg-orange-600
             text-white ">
                <NavLink to="/" className="hover:text-black active:text-black  focus:text-black">Home</NavLink>
                {isloggedIn ?
                    <UserMenu  />
                    :
                    <AuthNav  />
                }
            </header>
            <main className="my-5 px-3">
                <Outlet />
            </main>
            <footer className="bg-orange-600 px-7 py-3 text-white text-1xl
                flex justify-between">
                <Footer />
            </footer>
        </>
    );
};

export default Header;