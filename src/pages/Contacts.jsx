import { useEffect } from "react";
import { Link } from "react-router-dom";
import ContactsBox from "../components/ContactsBox.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { BASE_URL, AGENDA_SLUG } from "../store";

export const Contacts = () => {
  const { dispatch } = useGlobalReducer();

  useEffect(() => {
    const fetchContacts = async () => {
      // Ensure the agenda exists before fetching contacts
      await fetch(`${BASE_URL}/contact/agendas/${AGENDA_SLUG}`, { method: "POST" });
      const res = await fetch(`${BASE_URL}/contact/agendas/${AGENDA_SLUG}/contacts`);
      const data = await res.json();
      dispatch({ type: "set_contacts", payload: data.contacts ?? data });
    };
    fetchContacts();
  }, []);

  return (
    <div className="mt-5" style={{ width: "80%", margin: "0 auto" }}>
      <div className="d-flex justify-content-end mb-3">
        <Link to="/add">
          <button className="btn btn-success">Add new contact</button>
        </Link>
      </div>
      <ContactsBox />
    </div>
  );
};
