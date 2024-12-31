import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import godHandImg from "../Images/GodHand.png";
import moon from "../Images/Moon.png";
import cloud from "../Images/CloudLeft.png";
import mainSound from "../SFX/Gats.mp3";
import handRisingSound from "../SFX/Hand.mp3";
import "../CSS/Home.css";

export default function MainPage() {
    const navigate = useNavigate();
    const hoverMoonAudio = useRef(new Audio(handRisingSound));
    const mainAudio = useRef(new Audio(mainSound));

    useEffect(() => {
        // Store ref values in variables
        const mainAudioCurrent = mainAudio.current;
        const hoverMoonAudioCurrent = hoverMoonAudio.current;

        // Set volumes
        mainAudioCurrent.volume = 0.02;
        hoverMoonAudioCurrent.volume = 0.05;

        try {
            mainAudioCurrent.loop = true;
            mainAudioCurrent.play();
        } catch (error) {
            console.log("Audio autoplay failed:", error);
        }

        return () => {
            mainAudioCurrent.pause();
            mainAudioCurrent.currentTime = 0;
            hoverMoonAudioCurrent?.pause();
        };
    }, []);

    const handleMoonClick = () => {
        mainAudio.current.pause();
        hoverMoonAudio.current?.pause();
        navigate("/main");
    };

    const handleMoonMouseEnter = () => {
        if (hoverMoonAudio.current.paused) {
            mainAudio.current.pause();
            hoverMoonAudio.current.currentTime = 0;
            hoverMoonAudio.current.loop = true;
            hoverMoonAudio.current.play().catch(console.log);
        }
    };

    const handleMoonMouseLeave = () => {
        if (!hoverMoonAudio.current.paused) {
            hoverMoonAudio.current.pause();
            mainAudio.current.play().catch(console.log);
        }
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
        </div>
    );
}
