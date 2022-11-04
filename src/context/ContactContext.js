import { useState } from "react";
import { createContext } from "react";
import { db } from "../firebase/firebase";
import { ref, set, push, onValue, remove, update } from "firebase/database";
import { useEffect } from "react";

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [gender, setGender] = useState("");
	const [contacts, setContacts] = useState([]);
    const [edit, setEdit] = useState(false);
    const [updateId, setUpdateId] = useState("")

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
			for (let id in data) {
				contactArr.push({ id, ...data[id] });
			}
			setContacts(contactArr);
		});
	}, []);

    const deleteContact = (id) => {
        remove(ref(db, 'Contact/' + id))
    }

    const updateContact = () =>{
        update(ref(db, 'Contact/' + updateId), {
            name: name,
			number: number,
			gender: gender,
        })
        setName("");
		setNumber("");
		setGender("");
        setEdit(false);
        setUpdateId('')
    }

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
                contacts,
                deleteContact,
                updateContact,
                edit,
                setEdit,
                setUpdateId
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContextProvider;
