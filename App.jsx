import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";


function Home() {
  return 
}

function App() {
  return (
    <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;