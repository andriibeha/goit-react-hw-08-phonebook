import { NavLink } from "react-router-dom";

export default function AuthNav() { 
    return (
        <div>
            <NavLink to="/registration" >Registration</NavLink>
            <NavLink to="/login" >Login</NavLink>
        </div>
    );
}