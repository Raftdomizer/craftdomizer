// Libraries
import React, { useState } from "react";

// MUI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Instructions = () => {

    let [showInstructions, setShowInstructions] = useState(false);

    const handleClick = () => {
        showInstructions ? setShowInstructions(false) : setShowInstructions(true);
    };

    return (
        <div>
            <Typography variant="h5">Instructions</Typography>
            <Button variant="contained" onClick={handleClick}>
                Show Instructions
            </Button>
            { showInstructions &&
                <div>
                    Note: If you wish to hide results, uncheck "Show Spoilers?".
                    <ol>
                        <li>Select a shuffle option. Default is Vanilla.</li>
                        <ul>
                            <li>Note: Including more options will create stronger dependency on visiting small and large islands.</li>
                        </ul>
                        <li>Under Options, press the "Generate Preview" button.</li>
                        <li>Press the "Save Override" button.</li>
                        <li>Save the file, <code>RecipeOverride.json</code>, to the folder location <code>mods\ModData\RecipeRandomizer</code>.</li>
                    </ol>
                </div>
            }
        </div>
    );
}

export default Instructions;