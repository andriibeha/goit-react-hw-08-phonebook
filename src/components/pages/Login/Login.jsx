import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../../store/userReducer";
import { nanoid } from 'nanoid';

let inputEmailId = nanoid();
let inputPasswordId = nanoid();
console.log("TEST")


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();


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
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl text-center">Login</h2>
                <p className="my-3 text-center">Please fill in this form to login an account.</p>

                <div className="flex flex-col my-3 items-center border bg-gray-200 ">
                    <label className="my-2" htmlFor={inputEmailId}><b>Email</b></label>
                    <input onInput={handleInputChange}
                        className="border rounded-xl px-2 w-1/2 mb-3 "
                        value={email}
                        type="text"
                        placeholder="Enter Email"
                        name="email"
                        required
                        id={inputEmailId}>
                    </input>

                    <label className="my-2" htmlFor={inputPasswordId}><b>Password</b></label>
                    <input onInput={handleInputChange}
                        className="border rounded-xl px-2 w-1/2 mb-3 "
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        required
                        id={inputPasswordId}>
                    </input>
                </div>


                <p className="text-center">
                    Don't have account?
                    <NavLink className="text-sky-500 underline ml-1" to="/registration">Sign up</NavLink>
                </p>
                
                <button className="border rounded-xl bg-orange-600 py-1 px-3
                 hover:text-white display: flex items-center justify-center m-auto
                 my-3  "
                    type="submit" >Login</button>
            </form>
        </>
    );
};

export default Login;