import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Chart from "./components/Chart";
import Calendar from "./components/Calendar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          {/* <Route path="/calendar/:year" elemen={<Calendar />}></Route> */}
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
