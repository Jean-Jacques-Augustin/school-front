import React from "react";

import "./App.css";
import { Box, Toolbar } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organisms/Navbar";
import NavDrawers from "./components/organisms/NavDrawer";

/**
 * @name App
 * @constructor
 * @TODO: Point d'entrée de l'application => Ici, on va définir les routes de l'application
 */

function App() {
  return (
    <div className="App">
      <Box>
        <Navbar />
        <Toolbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/signup" element={<div>Signup</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <NavDrawers />
      </Box>
    </div>
  );
}

export default App;
