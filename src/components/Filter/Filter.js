import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from "../../store/reducer";

const Filter = () => {
    const value = useSelector((state) => state.contactsSlice.contacts.filter.value);
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setFilter(e.target.value));
    };

    return (
        <div className="pt-2 flex items-center m-auto justify-center bg-gray-200">
            <label className="my-2 ">
                Find contacts by name
                <input className="ml-5 border rounded-xl px-2  mb-3 "
                    type="text"
                    value={value}
                    onChange={onChange} />
            </label>
        </div>
    );
};

export default Filter;