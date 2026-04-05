import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    photo: "https://randomuser.me/api/portraits/lego/1.jpg"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "add_contact",
      payload: { ...formData, id: Date.now() }
    });
    navigate("/");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h2 className="text-center mb-4">Add a new contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Full Name</label>
          <input className="form-control" name="name" placeholder="Full Name" onChange={handleChange} />
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

        <button type="submit" className="btn btn-primary w-100">save</button>
      </form>

      <Link to="/">or get back to contacts</Link>
    </div>
  );
};
