import './App.css';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';
import ContactContextProvider from './context/ContactContext';


function App() {

  
  return (
    <div style={{width: '100vw', height:'100%', minHeight: '100vh', padding: '5rem', backgroundImage:"url(https://source.unsplash.com/random/900×700/?sunset)", backgroundPosition: 'center', backgroundSize: 'cover'}} className="d-flex justify-content-around App">
      <ContactContextProvider>
        <ContactForm  />
        <ContactTable/>
      </ContactContextProvider>
    </div>
  );
}

export default App;
