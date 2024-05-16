import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

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
      <button
        className={s.contactDeleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
