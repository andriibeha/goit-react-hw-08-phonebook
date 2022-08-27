import {useState} from "react";
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from "../../store/reducer";


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
            <form onSubmit={handleSubmit} className="">
                <div className="flex flex-col my-3 items-center border bg-gray-200 ">
                    <label className="my-2 font-bold" htmlFor={inputNameId}>Name:</label>
                    <input onInput={handleInputChange}
                        className="border rounded-xl px-2 w-1/2 mb-3 "
                        value={name}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={inputNameId}
                    />
                    
                    <label className="my-2 font-bold" htmlFor={inputTelId} >Number:</label>
                    <input onInput={handleInputChange}
                        className="border rounded-xl px-2 w-1/2 mb-3 "
                        value={phone}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        id={inputTelId}
                    />

                    <button className="border rounded-xl bg-orange-600 py-1 px-3
                 hover:text-white display: flex items-center justify-center m-auto
                 my-3  "
                        type="submit" >Add contact</button>
                </div>
                
                        
                
            </form>
        </div>
    );
};

export default Form;






