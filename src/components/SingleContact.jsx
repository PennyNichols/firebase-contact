import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { ContactContext } from "../context/ContactContext";
import { useContext } from "react";

const SingleContact = (props) => {
	const { deleteContact, setEdit, setName, setNumber, setGender, setUpdateId } =
		useContext(ContactContext);
	const { id, name, number, gender } = props.contact;

	const handleUpdate = () => {
		setName(name);
		setNumber(number);
		setGender(gender);
		setUpdateId(id);
		setEdit(true);
        
	};

	return (
		<tr className="text-center">
			<td className="text-capitalize border-0">{name}</td>
			<td className="border-0">{number}</td>
			<td className="text-capitalize border-0 gender">{gender}</td>
			<td  className="text-danger border-0" >
				<RiDeleteBinFill onClick={() => deleteContact(id)} style={{fontSize:'1.5rem', display:'flex', alignItems: 'center', justifyContent:'center', margin:'auto', cursor: 'pointer'}} />
			</td>
			<td className="text-success border-0">
				<MdModeEdit style={{fontSize:'1.5rem', display:'flex', alignItems: 'center', justifyContent:'center', margin:'auto', cursor:'pointer'}} onClick={handleUpdate} />
			</td>
		</tr>
	);
};

export default SingleContact;
