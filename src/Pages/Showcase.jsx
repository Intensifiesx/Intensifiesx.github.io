// Description: This is where the games and the
// react backend showcase will be

// Import our components
import PlayerStats from "./Components/PlayerStats";

// Import libraries
import React, { useState } from "react";

export default function Main() {
    // Get the components of the showcase page
    return (
        <>
            <PlayerStats />
            <div className="bottom-text" style={{ marginBottom: "-290px", backgroundColor: "black", color: "white", padding: "15px" }}>
                Made by Zain
            </div>
        </>
    );
}
