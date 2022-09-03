// Libraries
import React, { useState } from "react";

// Applicaiton components
import FutureFeatures from "./FutureFeatures";
import Instructions from "./Instructions";
import Preview from "./Preview";
import UserOptions from "./UserOptions";

const HomePage = () => {
    // Styles
    // TODO: Figure out a way to make styles play nicely with GitHub pages
    const HeaderStyle = { textAlign: "center" };
    const ContainerStyle = { display: "flex", justifyContent: "center" };
    const DivRight = { width: "25%", justifyContent: "center" };
    const DivLeft = { justifyContent: "center" };

    return (
        <div>
            <h1 style={HeaderStyle}>
                Raftdomizer: Craftdomizer (WIP)
            </h1>
            <div style={ContainerStyle}>
                <div style={DivRight}>
                    <Instructions />
                    <UserOptions />
                    <FutureFeatures />
                </div>
                <div style={DivLeft}>
                    <Preview />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
