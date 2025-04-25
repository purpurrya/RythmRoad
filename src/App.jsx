import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home'; 
import TableView from './assets/pages/TableView';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableView />} />
      </Routes>
    </Router>
  );
}

export default App;
