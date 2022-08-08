import React from "react";

const Instructions = () => {
    return (
        <div>
            <h2>Instructions</h2>
            Note: If you wish to hide results, un check "Show Spoilers?".
            <ol>
                <li>Select a radio button option. Default is Vanilla.</li>
                <li>Under Options, press the "Generate Preview" button.</li>
                <li>Press the "Save Override" button.</li>
                <li>Save the file, <code>RecipeOverride.json</code>, to the folder location <code>mods\ModData\RecipeRandomizer</code>.</li>
            </ol>
        </div>
    );
}

export default Instructions;