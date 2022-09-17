// Libraries
import React from "react";

// Application components
import FutureFeatures from "./FutureFeatures";
import Instructions from "./Instructions";
import Preview from "./Preview";
import UserOptions from "./UserOptions";

// MUI
import Typography from '@mui/material/Typography';

const HomePage = () => {
    // Styles
    // TODO: Figure out a way to make styles play nicely with GitHub pages
    const HeaderWrapper = { textAlign: "center" } as const;
    const ContainerStyle = { display: "flex", justifyContent: "center" } as const;
    const DivRight = { justifyContent: "center" } as const;
    const DivLeft = { justifyContent: "center" } as const;
    const DivCenter = { minWidth: "10px"} as const;

    return (
        <div>
            <div style={HeaderWrapper}>
            <Typography variant="h3" gutterBottom >Raftdomizer: Craftdomizer (WIP)</Typography>
            </div>
            <div style={ContainerStyle}>
                <div style={DivRight}>
                    <Instructions />
                    <UserOptions />
                    <FutureFeatures />
                </div>
                <div style={DivCenter}></div>
                <div style={DivLeft}>
                    <Preview />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
