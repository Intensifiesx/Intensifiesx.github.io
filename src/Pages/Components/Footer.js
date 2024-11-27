import React from "react";
import "../CSS/Footer.css"; // Import the CSS file

export default function Footer() {
    return (
        <footer className="footer">
            <div style={{ paddingTop: "5px", opacity: ".7" }}>© 2024 Made by Zain</div>
            <div>
                <button onClick={() => window.open("https://github.com/Intensifiesx", "_blank")} style={{ background: "transparent" }}>
                    <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/a-set-of-lines/github-outline-7.png"
                        alt="GitHub"
                        style={{ width: "30px", height: "30px", filter: "invert(100%)" }}
                    />
                </button>
                <button onClick={() => window.open("https://www.linkedin.com/in/zainhindi/", "_blank")} style={{ background: "transparent" }}>
                    <img
                        src="https://www.svgrepo.com/show/447169/linkedin-outline.svg"
                        alt="LinkedIn"
                        style={{ width: "30px", height: "30px", filter: "invert(100%)" }}
                    />
                </button>
                <button onClick={() => window.open("mailto:hindizain12@yahoo.com", "_blank")} style={{ background: "transparent" }}>
                    <img
                        src="https://images.vexels.com/media/users/3/130187/isolated/svg/5e8d2205ecc8cde3235581fc5ecfa430.svg"
                        alt="Email"
                        style={{ width: "30px", height: "30px", filter: "brightness(0) invert(1)" }}
                    />
                </button>
            </div>
        </footer>
    );
}
