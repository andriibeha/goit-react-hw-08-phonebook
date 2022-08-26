import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../../store/userReducer";
import { nanoid } from 'nanoid';

let inputEmailId = nanoid();
let inputPasswordId = nanoid();


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const reset = () => {
        setEmail("");
        setPassword("");
    };

    const handleInputChange = (e) => {
        if (e.target.name === "email") { 
            return (setEmail(e.target.value));
        } else if (e.target.name === "password") { 
            return (setPassword(e.target.value));
        } 
    };

    const handleSubmit = (e) => { 
        e.preventDefault();

        dispatch(loginUser({ email, password}));
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <p>Please fill in this form to login an account.</p>

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

                <p>Don't have account? <NavLink to="/registration">Sign up</NavLink></p>
                
                <button type="submit" >Login</button>
            </form>
        </>
    );
};

export default Login;