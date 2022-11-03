import React, { useContext } from "react";
import { Table } from "react-bootstrap";

import { ContactContext } from "../context/ContactContext";
import SingleContact from "./SingleContact";

const ContactTable = () => {
    const { name, number, gender, setName, setNumber, setGender, writeToDatabase, contacts } =
		useContext(ContactContext);




	return (
		<div className='text-center border p-5'>
			<h3 className="text-center mb-4">Contacts</h3>
			<Table style={{ width: "40vw" }}  bordered>
				<thead>
					<tr className="text-center">
						<th>Name</th>
						<th>Phone Number</th>
						<th>Gender</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
                    {contacts.map((contact, index) => {
                        return <SingleContact key={index} contact={contact} />
                    })}
					
				</tbody>
			</Table>
		</div>
	);
};

export default ContactTable;
