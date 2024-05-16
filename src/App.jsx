import { useState, useEffect } from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import { nanoid } from "nanoid";

function App() {
  const getStoredContacts = () => {
    const storedContacts = localStorage.getItem("contacts");
    return storedContacts
      ? JSON.parse(storedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState(getStoredContacts);
  console.log(contacts);
  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts([...contacts, newContact]);
  };
  const handleDelete = (contId) => {
    setContacts(
      contacts.filter((item) => {
        return item.id !== contId;
      })
    );
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="formWrapper">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChange={handleChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
