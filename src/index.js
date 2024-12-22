// App.js
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "./Pages/Home";
import NoPage from "./Pages/NoPage";
import Showcase from "./Pages/Showcase";
import SecondaryHome from "./Pages/SecondaryHome";
import FooterComp from "./Pages/Footer";
import "./CSS/tailwind.css";

function AppContent() {
    const location = useLocation();

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="secondaryhome" element={<SecondaryHome />} />
                <Route path="showcase" element={<Showcase />} />
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
