import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";

const SingleContact = (props) => {
    const {id, name, number, gender} = props.contact

	return (
		<tr className="text-center">
			
			<td className='text-capitalize'>{name}</td>
			<td>{number}</td>
			<td className='text-capitalize'>{gender}</td>
			<td className="text-danger">
				<RiDeleteBinFill />
			</td>
			<td className="text-success">
				<MdModeEdit />
			</td>
		</tr>
	);
};

export default SingleContact;
