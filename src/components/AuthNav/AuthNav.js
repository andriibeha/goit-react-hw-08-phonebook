import { NavLink } from "react-router-dom";

export default function AuthNav() { 
    return (
        <div>
            <NavLink to="/registration" className='mr-5 hover:text-black active:text-black  focus:text-black'>Registration</NavLink>
            <NavLink to="/login" className='hover:text-black active:text-black  focus:text-black'>Login</NavLink>
        </div>
    );
}