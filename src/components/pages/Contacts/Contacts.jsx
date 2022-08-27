import Form from "../../Form/Form";
import ContactList from "../../ContactList/ContactList";
import Filter from "components/Filter/Filter";

const Contacts = () => {

    return (
        <>
            <h1 className="text-center text-3xl my-3">Phonebook</h1>
            <Form />

            <Filter />
            
            <h2 className="text-center text-2xl my-3">Contacts</h2>

            <ContactList />
        </>
    );
};

export default Contacts;