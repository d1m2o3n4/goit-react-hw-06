import "./App.css";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  return (
    <div className="formWrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
