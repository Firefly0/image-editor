import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const App: React.FC = () => (
    <div className="app-container">
        <header className="main-header">
            <h1>PixelCraft Editor</h1>
        </header>
        <main>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    </div>
);

export default App;
