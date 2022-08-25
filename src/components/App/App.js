import From from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import s from './App.module.css';


function App() {
    return (
        <div className={s.container}>
            <h1>Phonebook</h1>
            <From/>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </div>
    );
};

export default App;


