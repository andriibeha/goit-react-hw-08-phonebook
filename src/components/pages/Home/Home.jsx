import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1 className="text-3xl text-center mb-3 font-bold">Wellcome to Phonebook services</h1>
            <p>
                On this site you can store your phone book contacts.
                All contacts save on mockapi, this means you can open this site on any device, login and see your contacts list.
            </p>
            <h3 className="text-2xl text-center my-3 font-bold">How it's work?</h3>
            <p >
                Just <NavLink className="text-sky-500 underline" to="/login">Login</NavLink> into site
                or if you don't have accaunt, - go to <NavLink className="text-sky-500 underline" to="/registration">Registration</NavLink>.
                Then you can go to <NavLink className="text-sky-500 underline" to="/contacts">Contacts</NavLink>.
                In Contacts you can:
            </p>
                <ul className="my-3 list-disc px-5">
                    <li>Add contact, just write name and phone and click on button "Add contact" (You can't add contact with same name!).</li>
                    <li>You can delete contact from contacs list, just click on button "X" </li>
                </ul>
            
        </>
    );
};

export default Home;