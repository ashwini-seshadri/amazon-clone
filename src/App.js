import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
          <Routes>
            <Route path="/" element={[ <Home /> ]} />
            <Route path="/checkout" element={<Checkout /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


