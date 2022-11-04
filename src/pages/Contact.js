import 'antd/dist/antd.css';
import './Contact.css';
import ContactForm from "../components/ContactForm";

export default function Contact() {
  
  return (
    <>
      <div className="App">
        <h1 className="title">🔒 GameLocker</h1>
        <div className="Content">
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
}