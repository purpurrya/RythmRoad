import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './assets/pages/Home.jsx'; 
import TableView from './assets/pages/TableView.jsx';  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
