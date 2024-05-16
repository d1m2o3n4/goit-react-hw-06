import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilter } from "../../redux/selectors";
const ContactList = () => {
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );
  return (
    <ul className={s.contactList}>
      {filteredContacts.map((cont) => (
        <Contact
          key={cont.id}
          id={cont.id}
          name={cont.name}
          number={cont.number}
        />
      ))}
    </ul>
  );
};
export default ContactList;
