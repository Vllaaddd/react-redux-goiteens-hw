import { MdClose } from "react-icons/md";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactSlice";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch()
  
  const handleClick = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  return (
    <div className={css.wrapper}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button className={css.btn} onClick={() => {
        handleClick(contact.id)
        console.log(contact);
        }}>
        <MdClose size={24} />
      </button>
    </div>
  );
};