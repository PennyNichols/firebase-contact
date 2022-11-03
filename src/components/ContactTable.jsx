import React from "react";
import { Table } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const ContactTable = () => {
	return (
		<div className='text-center border p-5'>
			<h3 className="text-center mb-4">Contacts</h3>
			<Table style={{ width: "40vw" }} striped bordered hover>
				<thead>
					<tr className="text-center">
						<th>#</th>
						<th>Name</th>
						<th>Phone Number</th>
						<th>Gender</th>
						<th>Delete</th>
						<th>Edit</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-center">
						<td>1</td>
						<td>Mark Otto</td>
						<td>555-555-5555</td>
						<td>Male</td>
						<td className="text-danger">
							<RiDeleteBinFill />
						</td>
						<td className="text-success">
							<MdModeEdit />
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default ContactTable;
