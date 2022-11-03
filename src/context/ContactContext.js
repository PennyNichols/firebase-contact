import { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase/firebase";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { useEffect } from "react";

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [gender, setGender] = useState("");
	const [contacts, setContacts] = useState([]);

	const writeToDatabase = () => {
		const contactRef = ref(db, "Contact");
		const newContactRef = push(contactRef);
		set(newContactRef, {
			name: name,
			number: number,
			gender: gender,
		});
		setName("");
		setNumber("");
		setGender("");
	};

	useEffect(() => {
		const contactRef = ref(db, "Contact");
		onValue(contactRef, (snapshot) => {
			const data = snapshot.val();
			const contactArr = [];
			for (let contact in data) {
				contactArr.push({ contact, ...data[contact] });
			}
			setContacts(contactArr);
		});
	}, []);

	return (
		<ContactContext.Provider
			value={{
				name,
				number,
				gender,
				setName,
				setNumber,
				setGender,
				writeToDatabase,
                contacts
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContextProvider;
