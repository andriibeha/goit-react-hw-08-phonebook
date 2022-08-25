import React from "react";
import PropTypes from 'prop-types';
import {  useDispatch } from 'react-redux';
import {  deleteContacts } from "../../store/reducer";
import s from "./ContactItem.module.css";

const ContactItem = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <li className={s.item}>
            {item.name} : {item.phone}
            <button type="button" className={s.delete}
                onClick={() => dispatch(deleteContacts(item.id))}>
                Delete
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