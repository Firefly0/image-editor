import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import GalleryPage from "./components/GalleryPage";
import EditPage from "./components/EditPage";

const App: React.FC = () => (
    <div className="app-container">
        <header className="main-header">
            <h1>PixelCraft Editor</h1>
        </header>
        <main>
            <Routes>
                <Route path="/" element={<GalleryPage />} />
                <Route path="/edit/:id" element={<EditPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </main>
    </div>
);

export default App;
