import React from 'react';
import logo from './logo.svg';
import './App.css';

import { UnderConstruction } from 'page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<UnderConstruction />} />
      </Routes>

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> 
      <UnderConstruction />
    </div>*/}
    </BrowserRouter>
  );
}

export default App;
