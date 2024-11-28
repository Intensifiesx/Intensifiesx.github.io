import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import godHandImg from "../Images/GodHand.png";
import moon from "../Images/Moon.png";
import cloudLeft from "../Images/CloudsLeft.png";
import cloudRight from "../Images/CloudsRight.png";
import "./CSS/Home.css";
import "./CSS/Tailwind.css";

// Home.jsx
export default function MainPage() {
    const navigate = useNavigate();

    const handleMoonClick = () => {
        navigate("/secondaryhome");
    };

    return (
        <div className="home">
            <img
                src={moon}
                alt="Moon"
                className="moon"
                onClick={handleMoonClick}
                style={{ pointerEvents: "auto" }} // Changed from "pointer-events" to pointerEvents
            />
            <img src={cloudLeft} alt="Clouds" className="cloudLeft" />
            <img src={cloudRight} alt="Clouds" className="cloudRight" />
            <div className="godHand">
                <img src={godHandImg} alt="God Hand" />
            </div>
            <Footer />
        </div>
    );
}
