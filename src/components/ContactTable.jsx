import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { ContactContext } from "../context/ContactContext";
import SingleContact from "./SingleContact";

const ContactTable = () => {
	const { contacts } = useContext(ContactContext);

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div
				className="table-wrapper text-center shadow-lg"
				style={{
					backgroundColor: "rgba(255,255,255,.5)",
					backdropFilter: "blur(5px)",
				}}
			>
				<h3 className="text-center mb-4">Contacts</h3>
				<Table className='table'>
					<thead>
						<tr className="text-center">
							<th className="border-0">Name</th>
							<th className="border-0">Phone Number</th>
							<th className="border-0 gender">Gender</th>
							<th className="border-0">Delete</th>
							<th className="border-0">Edit</th>
						</tr>
					</thead>
					<tbody>
						{contacts.map((contact, index) => {
							return <SingleContact key={index} contact={contact} />;
						})}
					</tbody>
				</Table>
			</div>
		</>
	);
};

export default ContactTable;
