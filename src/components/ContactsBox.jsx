import { useState } from "react";
import ContactCard from "./ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { BASE_URL, AGENDA_SLUG } from "../store";

const ContactsBox = () => {
  const { store, dispatch } = useGlobalReducer();
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDelete = async () => {
    await fetch(`${BASE_URL}/contact/agendas/${AGENDA_SLUG}/contacts/${contactToDelete}`, {
      method: "DELETE",
    });
    dispatch({ type: "delete_contact", payload: contactToDelete });
    setContactToDelete(null);
  };

  return (
    <>
      <div className="contact-box">
        {store.contacts.length === 0
          ? <p className="text-center text-muted mt-4">No contacts yet. Add one!</p>
          : store.contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} onDelete={setContactToDelete} />
          ))
        }
      </div>

      {/* Delete Confirmation Modal */}
      {contactToDelete && (
        <div className="modal d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button className="btn-close" onClick={() => setContactToDelete(null)} />
              </div>
              <div className="modal-body">
                Are you sure you want to delete this contact?
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setContactToDelete(null)}>Cancel</button>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactsBox;
