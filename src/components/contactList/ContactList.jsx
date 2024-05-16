import Contact from "../contact/Contact";
import s from "./ContactList.module.css";
const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map((cont) => (
        <Contact key={cont.id} contact={cont} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};
export default ContactList;
