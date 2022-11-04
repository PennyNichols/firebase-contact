import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { ContactContext } from "../context/ContactContext"; 
import { useContext } from "react";



const SingleContact = (props) => {
    const {deleteContact, setEdit, setName, setNumber, setGender, setUpdateId} = useContext(ContactContext)
    const {id, name, number, gender} = props.contact

    const handleUpdate = () =>{
        setName(name);
        setNumber(number);
        setGender(gender);
        setUpdateId(id);
        setEdit(true);
    }

	return (
		<tr className="text-center">
			
			<td className='text-capitalize'>{name}</td>
			<td>{number}</td>
			<td className='text-capitalize'>{gender}</td>
			<td className="text-danger" onClick={() => deleteContact(id)}>
				<RiDeleteBinFill  />
			</td>
			<td className="text-success">
				<MdModeEdit onClick={handleUpdate} />
			</td>
		</tr>
	);
};

export default SingleContact;
