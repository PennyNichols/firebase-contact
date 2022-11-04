import { useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { ref, set, push, onValue, remove, update } from "firebase/database";
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

    const handleSubmit = (e) => {
		e.preventDefault();
		if (!edit) {
			writeToDatabase();
            toast.success('Contact Added')

		} else {
			updateContact();
            
		}
	};

    const deleteContact = (id) => {
        remove(ref(db, 'Contact/' + id))
        toast.error('ContactDeleted')
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
        toast.success('Contact Updated');
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
                setUpdateId,
                handleSubmit
			}}
		>
			{children}
		</ContactContext.Provider>
	);
};

export default ContactContextProvider;
