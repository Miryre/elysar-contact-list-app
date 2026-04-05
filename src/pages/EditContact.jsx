import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { BASE_URL, AGENDA_SLUG } from "../store";

export const EditContact = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const { id } = useParams();

  const contact = store.contacts.find(c => c.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: contact?.name || "",
    email: contact?.email || "",
    phone: contact?.phone || "",
    address: contact?.address || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URL}/contact/agendas/${AGENDA_SLUG}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const updated = await res.json();
    dispatch({ type: "edit_contact", payload: updated });
    navigate("/");
  };

  if (!contact) return <h3 className="text-center mt-5">Contact not found.</h3>;

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4">Edit contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input required className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input className="form-control" name="address" value={formData.address} onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>

      <Link to="/">or get back to contacts</Link>
    </div>
  );
};
