import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Navbar></Navbar>
      <Switch>
        <Route exact path ="/" component = {Home} />
      </Switch>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            hello
          </p>
        </header>
      </div>
    </Routes>
  );
}

export default App;
