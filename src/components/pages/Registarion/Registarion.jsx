import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "../../../store/userReducer";
import { nanoid } from 'nanoid';

let inputEmailId = nanoid();
let inputNameId = nanoid();
let inputPasswordId = nanoid();


const Registration = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const reset = () => {
        setEmail("");
        setPassword("");
        setName("");
    };

    const handleInputChange = (e) => {
        if (e.target.name === "email") { 
            return (setEmail(e.target.value));
        } else if (e.target.name === "password") { 
            return (setPassword(e.target.value));
        } else if (e.target.name === "name") { 
            return (setName(e.target.value));
        };
    };

    const handleSubmit = (e) => { 
        e.preventDefault();

        dispatch(addUser({name, email, password}));
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Registration</h2>
                <p>Please fill in this form to create an account.</p>

                <label htmlFor={inputEmailId}><b>Email</b></label>
                <input onInput={handleInputChange}
                    value={email}
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    required
                    id={inputEmailId}>
                    </input>

                <label htmlFor={inputPasswordId}><b>Password</b></label>
                <input onInput={handleInputChange}
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    required
                    id={inputPasswordId}>
                    </input>

                <label htmlFor={inputNameId}><b>Name</b></label>
                <input onInput={handleInputChange}
                    value={name}
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    required
                    id={inputNameId}>
                    
                    </input>

                <p>Already have an account?  <NavLink to="/login">Sign in</NavLink>.</p>
                
                <button type="submit" >Sign up</button>
            </form>
        </>
    );
};

export default Registration;