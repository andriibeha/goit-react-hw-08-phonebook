import {useState} from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from "../../store/reducer";
import s from './Form.module.css';


let inputNameId = nanoid();
let inputTelId = nanoid();


function Form() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const contacts = useSelector((state) => state.contactsSlice.contacts.items);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === "name") { 
            return (setName(value));
        } else if (name === "number") { 
            return (setPhone(value));
        };
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        let data = { name, phone };
        let findName = contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase()); 

        if (findName) { 
            return alert(`${data.name} is already in contact`)
        } else { 
            dispatch(addContacts(data))
        };

        reset();
    };

    const reset = () => {
        setName("");
        setPhone("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={s.form}>
                <label htmlFor={inputNameId} className={s.label}>Name:</label>
                <input onInput={handleInputChange}
                    className={s.input}
                    value={name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    id={inputNameId}
                />
                    
                <label htmlFor={inputTelId} className={s.label}>Number:</label>
                <input onInput={handleInputChange}
                    className={s.input}
                    value={phone}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    id={inputTelId}
                />
                        
                <button type="submit" className={s.button}>Add contact</button>
            </form>
        </div>
    );
};

export default Form;






