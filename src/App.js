import './App.css';
import './pages/Home.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useActionData
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Library from './pages/Library';
import Header from './components/Header';
import React, { useState } from 'react';
import Footer from './components/Footer';

export const LoginContext = React.createContext([0]);

function App() {
  const [log, setLog] = useState(0);
  return (

    <LoginContext.Provider value={[log, setLog]}>
      <div className="App">
        <Router>
          <Header className="Header" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/library" element={<Library />} />
          </Routes>
          <div className="Footer">
            <Footer />
          </div>
        </Router>
      </div>
    </LoginContext.Provider>
  );
}

export default App;
