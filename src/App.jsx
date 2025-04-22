import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./assets/css/styles.css";
import "./assets/css/table_styles.css";

import Home from "./components/Home";
import TableView from "./components/TableView";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TableView />} />
      </Routes>
    </BrowserRouter>
  );
}
