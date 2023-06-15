import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Landingpage from './view/landingpage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
      <h1>Henry Dogs</h1>
    </div>
  );
}

export default App;
