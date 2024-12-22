import React from "react";

export default function FooterComp() {
    return (
        <footer className="bg-black text-white fixed bottom-0 left-0 w-full">
            <div className="container flex justify-between items-center px-4">
                {/* Left Text */}
                <span className="text-sm">© 2024 Made by Zain (Website is a work in progress)</span>

                {/* Right Buttons */}
                <span>
                    <button onClick={() => window.open("https://github.com/Intensifiesx", "_blank")} aria-label="GitHub">
                        <img
                            src="https://icons.veryicon.com/png/o/miscellaneous/a-set-of-lines/github-outline-7.png"
                            alt="GitHub"
                            className="w-[30px] h-[30px] invert"
                        />
                    </button>
                    <button onClick={() => window.open("https://www.linkedin.com/in/zainhindi/", "_blank")} aria-label="LinkedIn">
                        <img src="https://www.svgrepo.com/show/447169/linkedin-outline.svg" alt="LinkedIn" className="w-[30px] h-[30px] invert" />
                    </button>
                    <button onClick={() => window.open("mailto:hindizain12@yahoo.com", "_blank")} aria-label="Email">
                        <img
                            src="https://images.vexels.com/media/users/3/130187/isolated/svg/5e8d2205ecc8cde3235581fc5ecfa430.svg"
                            alt="Email"
                            className="w-[30px] h-[30px] brightness-0 invert"
                        />
                    </button>
                </span>
            </div>
        </footer>
    );
}
