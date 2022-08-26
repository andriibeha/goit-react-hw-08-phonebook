import { useDispatch } from "react-redux";
import { logoutUser } from "store/userReducer";


const Logout = () => {
    const dispatch = useDispatch();

    return (
        <>
            <button type="button" onClick={() => dispatch(logoutUser())}>Logout</button>
        </>
    );
};

export default Logout;