import { useEffect, useRef, useState } from "react";
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
    const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
    const mainAudioCurrent = mainAudio.current;
    const hoverMoonAudioCurrent = hoverMoonAudio.current;

    // Set volumes
    mainAudioCurrent.volume = 0.02;
    hoverMoonAudioCurrent.volume = 0.05;

    useEffect(() => {
        // Function to handle page click and unlock audio
        const handlePageClick = () => {
            if (!mainAudio.current.paused) return; // Audio is already unlocked

            setIsAudioUnlocked(true);
            mainAudioCurrent.loop = true;
            mainAudioCurrent
                .play()
                .then(() => {
                    console.log("Main audio started playing");
                })
                .catch((error) => {
                    console.log("Audio autoplay failed:", error);
                });
        };

        // Add click event listener to the document
        document.addEventListener("click", handlePageClick);

        // Cleanup
        return () => {
            document.removeEventListener("click", handlePageClick);
            mainAudioCurrent.pause();
            mainAudioCurrent.currentTime = 0;
            hoverMoonAudioCurrent?.pause();
        };
    }, [isAudioUnlocked, mainAudioCurrent, hoverMoonAudioCurrent]);

    const handleMoonClick = () => {
        mainAudio.current.pause();
        hoverMoonAudio.current?.pause();
        navigate("/main");
    };

    const handleMoonMouseEnter = () => {
        if (isAudioUnlocked && hoverMoonAudio.current.paused) {
            mainAudio.current.pause();
            hoverMoonAudio.current.currentTime = 0;
            hoverMoonAudio.current.loop = true;
            hoverMoonAudio.current
                .play()
                .then(() => {
                    console.log("Hover audio started playing");
                })
                .catch((error) => {
                    console.log("Hover audio playback failed:", error);
                });
        }
    };

    const handleMoonMouseLeave = () => {
        if (!hoverMoonAudio.current.paused) {
            hoverMoonAudio.current.pause();
            mainAudio.current
                .play()
                .then(() => {
                    console.log("Main audio resumed");
                })
                .catch((error) => {
                    console.log("Main audio playback failed:", error);
                });
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
