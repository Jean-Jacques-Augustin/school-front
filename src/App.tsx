import React from "react";

import "./App.css";
import { Box, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

/**
 * @name App
 * @constructor
 * @TODO: Point d'entrée de l'application => Ici, on va définir les routes de l'application
 */

function App() {
  const url = window.location.href;
  const dashboardUrl = url.includes("dashboard");
  return (
    <Box>
      {dashboardUrl ? "" : <Navbar />}
      <Toolbar />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<div>Signup</div>} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="test" element={<div>Hello word</div>} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
