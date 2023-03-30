import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Chart from "./components/Chart";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/calendar" elemen={<Calendar />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
{
  /* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>; */
}

export default App;
