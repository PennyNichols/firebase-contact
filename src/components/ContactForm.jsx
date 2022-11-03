import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaUser, FaPhone } from "react-icons/fa";
import { BsGenderTrans } from "react-icons/bs";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const ContactForm = () => {
	const { name, number, gender, setName, setNumber, setGender, writeToDatabase } =
		useContext(ContactContext);

	const handleSubmit = (e) => {
		e.preventDefault();
        writeToDatabase();
	};

	return (
		<Form className="border p-5" onSubmit={handleSubmit}>
			<h3 className="text-center mb-5">New Contact</h3>
			<Form.Group className="d-flex border p-1 my-2">
				<FaUser style={{ fontSize: "1.5rem", display: "flex" }} />
				<Form.Control
					className="border-0"
					type="text"
					placeholder="Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group className="d-flex border p-1 my-2">
				<FaPhone style={{ fontSize: "1.5rem", display: "flex" }} />
				<Form.Control
					className="border-0"
					type="tel"
					placeholder="555-555-5555"
					value={number}
					onChange={(e) => setNumber(e.target.value)}
					required
				/>
			</Form.Group>
			<Form.Group className="d-flex border p-1 my-2">
				<BsGenderTrans style={{ fontSize: "1.5rem", display: "flex" }} />
				<Form.Select
					className="border-0"
                    value={gender}
					onChange={(e) => setGender(e.target.value)}
				>
					<option value="Gender">
						Gender
					</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Other">Other</option>
				</Form.Select>
			</Form.Group>
            <Button type='submit' style={{width: '100%'}} className='mt-4'>Submit</Button>
		</Form>
	);
};

export default ContactForm;
