import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components';
import Home from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path ="/" component = {<Home />} />
      </Routes>
      <div className="App">
        <header className="App-header">
          <p>
            hello
          </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
