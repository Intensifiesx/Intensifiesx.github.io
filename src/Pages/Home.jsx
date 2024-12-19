import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import godHandImg from "../Images/GodHand.png";
import moon from "../Images/Moon.png";
import cloud from "../Images/CloudLeft.png";
import mainSound from "../SFX/Gats.mp3";
import handRisingSound from "../SFX/Hand.mp3";
import transitionSound from "../SFX/Transition.wav";
import "./CSS/Home.css";
import "./CSS/Tailwind.css";

export default function MainPage() {
    const navigate = useNavigate();
    const hoverMoonAudio = useRef(new Audio(handRisingSound));
    const mainAudio = useRef(new Audio(mainSound));
    const transitionAudio = useRef(new Audio(transitionSound));
    mainAudio.current.volume = 0.02;
    hoverMoonAudio.current.volume = 0.05;

    useEffect(() => {
        // Play main audio on component mount
        mainAudio.current.play().catch(console.log);
        mainAudio.current.loop = true;

        return () => {
            // Clean up on component unmount
            mainAudio.current.pause();
            mainAudio.current.currentTime = 0;
            hoverMoonAudio.current?.pause();
        };
    }, []);

    const handleMoonClick = () => {
        navigate("/secondaryhome");
        if (transitionAudio.current) {
            mainAudio.current.pause();
            hoverMoonAudio.current?.pause();
            transitionAudio.current.volume = 0.03;
            transitionAudio.current.play().catch(console.log);
        }
    };

    const handleMoonMouseEnter = () => {
        if (hoverMoonAudio.current.paused) {
            mainAudio.current.pause();
            hoverMoonAudio.current.currentTime = 0; // Ensure it starts from the beginning
            hoverMoonAudio.current.loop = true;
            hoverMoonAudio.current.play().catch(console.log);
        }
    };

    const handleMoonMouseLeave = () => {
        if (hoverMoonAudio.current) {
            hoverMoonAudio.current.pause();
            hoverMoonAudio.current.currentTime = 0;
        }
        mainAudio.current.play().catch(console.log);
    };

    return (
        <div className="home">
            <img
                src={moon}
                alt="Moon"
                className="moon"
                onClick={handleMoonClick}
                onMouseEnter={handleMoonMouseEnter}
                onMouseLeave={handleMoonMouseLeave}
            />
            <img src={cloud} alt="Clouds" className="cloudLeft" />
            <img src={cloud} alt="Clouds" className="cloudRight" />
            <div className="godHand">
                <img src={godHandImg} alt="God Hand" />
            </div>
            <Footer />
        </div>
    );
}
