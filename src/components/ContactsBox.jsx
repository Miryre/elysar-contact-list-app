import Contact from "./Contact";
import useGlobalReducer from "../hooks/useGlobalReducer";

const ContactBox = () => {
  const { store, dispatch } = useGlobalReducer();

  const handleDelete = (id) => {
    dispatch({ type: "delete_contact", payload: id });
  };

  return (
    <div className="contact-box">
      {store.contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactBox;
