// App.js
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Main from "./Pages/Main";
import FooterComp from "./Pages/Footer";
import "./CSS/tailwind.css";

function AppContent() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="main" element={<Main />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
            {location.pathname !== "/" && <FooterComp />}
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

// Renders the App component into a div with the id of 'root'
ReactDOM.render(<App />, document.getElementById("root"));
