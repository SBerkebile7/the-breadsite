import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './elements';
import Home from './elements/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" element = {<Home />} />
      </Routes>
      
    </Router>
  );
}

export default App;
