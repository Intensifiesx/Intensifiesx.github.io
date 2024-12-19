import React, { useState } from "react";
import Footer from "./Components/Footer";

export default function Main() {
    return (
        <>
            <div className="showcase">
                <h1>Showcase</h1>
                <p>This is a showcase page. Here, you can display your projects or anything else you want to show off.</p>
            </div>
            <Footer />
        </>
    );
}