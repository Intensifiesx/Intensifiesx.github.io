import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Navbar.css";

// Function to create a button that links to a page (cleaner code)
// to: the path to the page
// text: the text that will be displayed on the button
function getLinkedButtons(to, text) {
    return (
        <section>
            <Link to={"/" + to} style={{ textDecoration: "none" }}>
                <Button variant="outline-primary" style={{ margin: "10px" }}>
                    {text}
                </Button>
            </Link>
        </section>
    );
}

// The navbar component
export default function Navbar() {
    return (
        <nav className="navbar">
            {getLinkedButtons("", "Home")}
            {getLinkedButtons("showcase", "Showcase")}
        </nav>
    );
}
