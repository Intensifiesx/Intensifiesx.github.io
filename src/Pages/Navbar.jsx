import React from "react";
import { Link } from "react-router-dom";

function getLinkedButtons(to, text) {
    return (
        <section>
            <Link to={"/" + to}>
                <button
                    className="relative px-6 py-3 m-2
                             text-white border-white rounded-full
                             overflow-hidden 
                             outline-none focus:outline-none
                             appearance-none
                             group hover:scale-110 transition-all duration-300"
                >
                    {/* Filling background */}
                    <span
                        className="absolute inset-0 bg-white
                                transform -translate-x-[101%] transition-transform
                                duration-300 ease-out
                                group-hover:translate-x-0"
                    ></span>
                    {/* Text */}
                    <span className="relative group-hover:text-black transition-colors duration-300">{text}</span>
                </button>
            </Link>
        </section>
    );
}

export default function Navbar() {
    return (
        <nav className="p-4 inline-flex  top-0 right-0 fixed">
            {getLinkedButtons("", "Home")}
            {getLinkedButtons("", "About")}
            {getLinkedButtons("", "Projects")}
        </nav>
    );
}
