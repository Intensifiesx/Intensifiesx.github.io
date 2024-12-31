import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
import "./CSS/tailwind.css";
import React from "react";

function AppContent() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="main"
                    element={<Main />}
                    key={window.location.pathname} // Add key for force re-render
                />
                <Route path="*" element={<NoPage />} />
            </Routes>
            {location.pathname !== "/" && <Footer />}
        </>
    );
}

export default function App() {
    return (
        <HashRouter>
            <AppContent />
        </HashRouter>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
