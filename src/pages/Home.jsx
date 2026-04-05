import { Link } from "react-router-dom";
import ContactBox from "../components/ContactsBox.jsx";

export const Home = () => {
	return (
		<div className="mt-5" style={{ width: "80%", margin: "0 auto" }}>
			<div className="d-flex justify-content-end mb-3">
				<Link to="/add">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>
			<ContactBox />
		</div>
	);
}; 