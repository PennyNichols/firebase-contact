import { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase/firebase";

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [gender, setGender] = useState(null);

	return (
		<ContactContext.Provider
			value={{ name, number, gender, setName, setNumber, setGender }}
		>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContextProvider;
