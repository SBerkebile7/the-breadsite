import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/fontAwesome.css';
import './assets/css/tooplate-style.css';

import Navbar from './elements/Navbar';
import Home from './elements/Home';
import Contact from './elements/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element = {<Home />} />
        <Route exact path ="/contact" element = {<Contact />} />
      </Routes>
      
    </Router>
  );
}

export default App;
