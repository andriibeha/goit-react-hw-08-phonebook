import React from "react";
import PropTypes from 'prop-types';
import {  useDispatch } from 'react-redux';
import {  deleteContacts } from "../../store/reducer";

const ContactItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li className="text-lg ">
            {item.name} : {item.number}
            <button className="border rounded-xl bg-orange-600  px-3
                 hover:text-white hover:bg-red-600 my-3 "
                type="button" 
                onClick={() => dispatch(deleteContacts(item.id))}>
                X
            </button>
        </li>
    );
};


ContactItem.prototype = {
    item: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        id: PropTypes.string,
        createdAt: PropTypes.string
    }),
}

export default ContactItem;