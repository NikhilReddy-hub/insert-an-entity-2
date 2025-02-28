import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Movieform } from "./components/Movieform";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/create" element={<Movieform />} />
      </Routes>
    </Router>
  );
};

export default App;