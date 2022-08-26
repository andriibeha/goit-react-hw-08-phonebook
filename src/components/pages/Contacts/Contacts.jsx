import Form from "../../Form/Form";
import ContactList from "../../ContactList/ContactList";

const Contacts = () => {

   /*  <h1>Phonebook</h1>
                <From />
                <h2>Contacts</h2>
                <Filter />
        <ContactList /> */

    return (
        <>
            <h1>Phonebook</h1>
            <Form />

            <h2>Contacts</h2>

            <ContactList />
        </>
    );
};

export default Contacts;