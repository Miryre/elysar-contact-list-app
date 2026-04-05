import { Link } from "react-router-dom";

export const AddContactButton = () => {

	return (
		
			<div className="container">
				
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-success ">Add Contact +</button>
					</Link>
				</div>
			</div>
		
	);
};

export default AddContactButton;