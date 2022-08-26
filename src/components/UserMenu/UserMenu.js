import Logout from "components/pages/Logout/Logout";
import { NavLink } from "react-router-dom";

export default function UserMenu() { 
    return (
        <div>
            <NavLink to="/contacts" >Contacts</NavLink>
            <Logout />
        </div>
    );
}