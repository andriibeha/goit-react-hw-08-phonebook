import Logout from "components/pages/Logout/Logout";
import { NavLink } from "react-router-dom";

export default function UserMenu() { 
    return (
        <div>
            <NavLink to="/contacts" className='hover:text-black active:text-black  focus:text-black'>Contacts</NavLink>
            <Logout className='hover:text-black active:text-black  focus:text-black'/>
        </div>
    );
}