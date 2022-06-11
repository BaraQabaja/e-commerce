import { useState } from "react";
import "./App.css";
import { Error, Home, Shop } from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="home/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
