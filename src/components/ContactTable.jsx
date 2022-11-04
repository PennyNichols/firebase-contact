import React, { useContext } from "react";
import { Table } from "react-bootstrap";

import { ContactContext } from "../context/ContactContext";
import SingleContact from "./SingleContact";

const ContactTable = () => {
    const { name, number, gender, setName, setNumber, setGender, writeToDatabase, contacts } =
		useContext(ContactContext);




	return (
		<div className='text-center p-5 shadow-lg' style={{backgroundColor: 'rgba(255,255,255,.5)', backdropFilter: 'blur(5px)'}}>
			<h3 className="text-center mb-4">Contacts</h3>
			<Table style={{ width: "40vw" }}  >
				<thead>
					<tr className="text-center" >
						<th className="border-0">Name</th>
						<th className="border-0">Phone Number</th>
						<th className="border-0">Gender</th>
						<th className="border-0">Delete</th>
						<th className="border-0">Edit</th>
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
