import s from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
const Contact = ({ contact, handleDelete }) => {
  const { id, name, number } = contact;
  return (
    <li className={s.contactItem}>
      <div className={s.infoWrapper}>
        <p>
          <FaUserAlt className={s.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.contactIcon} />
          {number}
        </p>
      </div>
      <button className={s.contactDeleteBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};
export default Contact;
