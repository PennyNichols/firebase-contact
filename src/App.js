import './App.css';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import ContactContextProvider from './context/ContactContext';

function App() {

  
  return (
    <div style={{width: '100vw', height:{'100%' : '100vh'}, padding: '5rem'}} className="d-flex justify-content-around">
      <ContactContextProvider>
        <ContactForm />
        <ContactTable/>
      </ContactContextProvider>
    </div>
  );
}

export default App;
