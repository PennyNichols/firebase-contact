import './App.css';
import ContactForm from './components/ContactForm';
import ContactTable from './components/ContactTable';

function App() {
  return (
    <div style={{width: '100vw', height:{'100%' : '100vh'}, padding: '5rem'}} className="d-flex justify-content-around">
      <ContactForm />
      <ContactTable/>
    </div>
  );
}

export default App;
