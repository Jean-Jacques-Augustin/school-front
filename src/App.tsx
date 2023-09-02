import React from 'react';

import './App.css';
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";

/**
 * @name App
 * @constructor
 * @TODO: Point d'entrée de l'application => Ici, on va définir les routes de l'application
 */

function App() {
    return (
        <div className="App">
            <Box>
                <div>Navigation</div>
                <Routes>
                    <Route path="/" element={<div>Home</div>}/>
                    <Route path="/login" element={<div>Login</div>}/>
                    <Route path="/signup" element={<div>Signup</div>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </Box>
        </div>
    );
}

export default App;
