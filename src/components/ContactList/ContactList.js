import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { getContacts, getFilter } from "../../redux/selectors";

export const ContactList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilter).name.toLowerCase()

  const visibleContacts = contacts.filter(contact => {
    if (filter === "") {
      return true;
    } else {
      return contact.name.toLowerCase() === filter;
    }
  })

  return (
    <ul className={css.list}>
      {visibleContacts.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};