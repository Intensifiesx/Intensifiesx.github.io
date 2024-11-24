// Description: This is where the games and the
// react backend showcase will be

// Import our components
import Todos from "./Components/Todos";
import Habits from "./Components/Habits";
import Dailies from "./Components/Dailies";
import Rewards from "./Components/Rewards";
import PlayerStats from "./Components/PlayerStats";

// Import libraries
import React, { useState } from "react";

export default function Main() {
    // Get the components of the showcase page
    return (
        <>
            <div className="bottom-text" style={{ marginBottom: "-290px", backgroundColor: "black", color: "white", padding: "15px" }}>
                Made by Zain
            </div>
        </>
    );
}
