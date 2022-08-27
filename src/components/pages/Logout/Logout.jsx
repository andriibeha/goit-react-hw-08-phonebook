import { useDispatch } from "react-redux";
import { logoutUser } from "store/userReducer";


const Logout = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button className='ml-5 hover:text-black active:text-black  focus:text-black'
                type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
        </>
    );
};

export default Logout;