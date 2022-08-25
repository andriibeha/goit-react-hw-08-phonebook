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
        <label>
            Find contacts by name
            <input type="text"
                value={value}
                onChange={onChange} />
        </label>
    );
};

export default Filter;