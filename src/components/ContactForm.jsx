import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaUser, FaPhone } from "react-icons/fa";
import { BsGenderTrans } from "react-icons/bs";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactForm = () => {
	const {
		name,
		number,
		gender,
		setName,
		setNumber,
		setGender,
		writeToDatabase,
		updateContact,
		edit,
	} = useContext(ContactContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!edit) {
			writeToDatabase();
            alert('Contact Added')
		} else {
			updateContact();
            alert('Contact Updated')
		}
	};

	return (
		<Form
			style={{
				backgroundColor: "rgba(255,255,255,.5)",
				backdropFilter: "blur(5px)",
                maxHeight: '25rem'
			}}
			className="p-5 shadow-lg"
			onSubmit={handleSubmit}
		>
			<h3 className="text-center mb-5">New Contact</h3>
			<Form.Group className="d-flex p-1 my-2">
				<FaUser
					style={{ fontSize: "1.5rem", display: "flex", alignSelf: "center" }}
				/>
				<Form.Control
					style={{ backgroundColor: "rgba(255,255,255,.4)" }}
					className="border-0 ms-3"
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group className="d-flex p-1 my-2">
				<FaPhone
					style={{ fontSize: "1.5rem", display: "flex", alignSelf: "center" }}
				/>
				<Form.Control
					style={{ backgroundColor: "rgba(255,255,255,.4)" }}
					className="border-0 ms-3"
					type="tel"
					placeholder="555-555-5555"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group className="d-flex p-1 my-2">
				<BsGenderTrans
					style={{ fontSize: "1.5rem", display: "flex", alignSelf: "center" }}
				/>
				<Form.Select
					style={{ backgroundColor: "rgba(255,255,255,.4)" }}
					className="border-0 ms-3"
					value={gender}
					onChange={(e) => setGender(e.target.value)}
				>
					<option value="Gender">Gender</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Other">Other</option>
				</Form.Select>
			</Form.Group>
			<Button type="submit" style={{ width: "100%", backgroundColor: "rgba(255,255,255,.4)", color: 'black' }} className="mt-4 border-0 shadow">
				Submit
			</Button>
		</Form>
	);
};

export default ContactForm;
