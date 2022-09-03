import React from "react";

const Instructions = () => {
    return (
        <div>
            <h2>Instructions</h2>
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
    );
}

export default Instructions;