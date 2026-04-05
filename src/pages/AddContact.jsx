import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { BASE_URL, AGENDA_SLUG } from "../store";

export const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${BASE_URL}/contact/agendas/${AGENDA_SLUG}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const newContact = await res.json();
    dispatch({ type: "add_contact", payload: newContact });
    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4">Add a new contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input required className="form-control" name="name" placeholder="Full Name" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" placeholder="Enter email" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input className="form-control" name="phone" placeholder="Enter phone" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input className="form-control" name="address" placeholder="Enter address" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary w-100">Save</button>
      </form>

      <Link to="/">or get back to contacts</Link>
    </div>
  );
};
