import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Wellcome to Phonebook services</h1>
            <p>On this site you can store your phone book contacts.
                All contacts save on mockapi, this means you can open this site on any device, login and see your contacts list.
            </p>
            <h2>How it's work?</h2>
            <p>Just <NavLink to="/login">Login</NavLink> into site
                or if you don't have accaunt, - go to <NavLink to="/registration">Registration</NavLink>.
                Then you can go to <NavLink to="/contacts">Contacts</NavLink>.
                In Contacts you can: </p>
                <ol>
                    <li>Add contact, just write name and phone and click on button "Add contact" (You can't add contact with same name!).</li>
                    <li>You can delete contact from contacs list, just click on button "Delete" </li>
                </ol>
            
        </>
    );
};

export default Home;