import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactSlice";
import { nanoid } from "nanoid";

export const ContactForm = () => {
  const dispatch = useDispatch()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact({
      id: nanoid(),
      name: form.elements.name.value,
      number: form.elements.number.value
    }))
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="name"
        placeholder="Enter name..."
      />
      <input
        className={css.field}
        type="text"
        name="number"
        placeholder="Enter phone number..."
      />
      <button type="submit">Add contact</button>
    </form>
  );
};