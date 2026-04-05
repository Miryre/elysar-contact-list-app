import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

const Contact = ({ contact, onDelete }) => {
    return(
        <div className="d-flex align-items-center p-3" style={{ borderBottom: "1px solid #dee2e6" }}>

            <img
            src={contact.photo}
            alt={contact.name}
            style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover"}}
            />

            <div className="ms-4 flex-grow-1">
                <h5 className="mb-1">{contact.name}</h5>
                <p className="mb-0"><FontAwesomeIcon icon={faLocationDot} className="me-2" />{contact.address}</p>
                <p className="mb-0"><FontAwesomeIcon icon={faPhone} className="me-2" />{contact.phone}</p>
                <p className="mb-0"><FontAwesomeIcon icon={faEnvelope} className="me-2" />{contact.email}</p>
            </div>

            <div className="d-flex gap-3">
                <Link to={`/edit/${contact.id}`}>
                    <button className="btn btn-link p-0"><FontAwesomeIcon icon={faPencil} /></button>
                </Link>
                <button className="btn btn-link p-0" onClick={() => onDelete(contact.id)}>
                    <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                </button>
            </div>

        </div>
    );
};

export default Contact;