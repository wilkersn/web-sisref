import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Login } from "../screens/Login";
import { Home } from "../screens/home";
import { Frequency } from "../screens/frequency";

export default function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/frequency" element={<Frequency />} />
      </Routes>
    </Router>
  );
}