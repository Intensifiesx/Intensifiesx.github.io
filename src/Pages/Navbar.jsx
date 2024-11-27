import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

// Function to create a button that links to a page (cleaner code)
// to: the path to the page
// text: the text that will be displayed on the button
function getLinkedButtons(to, text) {
    return (
        <section>
            <Link to={"/" + to} style={{ textDecoration: "none" }}>
                <Button>{text}</Button>
            </Link>
        </section>
    );
}

// The navbar component
export default function Navbar() {
    return (
        <nav style={{ backgroundColor: "white" }}>
            {getLinkedButtons("", "Home")}
            {getLinkedButtons("showcase", "Showcase")}
        </nav>
    );
}
