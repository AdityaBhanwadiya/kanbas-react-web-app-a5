import React from 'react';
import Labs from "./Labs";
import Kanbas from './Kanbas';
import HelloWorld from './Labs/a3/HelloWorld';
import './App.css';
import JavaScript from './Labs/a3/JavaScript';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>

  );
}
export default App;


