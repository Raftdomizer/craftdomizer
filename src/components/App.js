// Libraries
import React, { useState } from "react";
import FileSaver from "file-saver";

// Data
import VanillaCraftingMenu from "../data/VanillaCraftingMenu.json";
import EmptyCraftingMenu from "../data/EmptyCraftingMenu.json";

// Applicaiton components
import GeneratePreview from "../utils/GeneratePreview";
import Preview from "./Preview";
import Instructions from "./Instructions";

function App() {
    // Styles
    // TODO: Figure out a way to make styles play nicely with GitHub pages
    const HeaderStyle = {textAlign: "center"};
    const ButtonStyle = {marginBottom: "25px"};
    const ContainerStyle = {display: "flex", justifyContent: "center"};
    const DivRight =  {width: "25%", justifyContent: "center"};
    const DivLeft =  {justifyContent: "center"};


    const parsedVanilla = JSON.parse(JSON.stringify(VanillaCraftingMenu, null, 2));
    let emptyCraftingMenu = JSON.parse(JSON.stringify(EmptyCraftingMenu, null, 2));

    const [craftingMenuPreview, setCraftingMenuPreview] = useState(JSON.stringify(parsedVanilla, null, 2));
    const [radioOption, setRadioOption] = useState("option0");
    const [radioOptionValue, setRadioOptionValue] = useState("Vanilla");
    const [dateTime, setDateTime] = useState(new Date().toISOString());

    const saveJsonFile = async () => {
        const blob = new Blob(
            [craftingMenuPreview],
            { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(blob, "RecipeOverride.json");
    };

    // TODO: Move this whole function(s) into its own container component
    const previewContent = () => {
        if (radioOption === "option0") {
            setCraftingMenuPreview(JSON.stringify(VanillaCraftingMenu, null, 2));
            setRadioOptionValue("Vanilla");
        } else {
            const parsedJson = parsedVanilla;

            emptyCraftingMenu = GeneratePreview(parsedJson, radioOption);
            setCraftingMenuPreview(JSON.stringify(emptyCraftingMenu, null, 2));

            if (radioOption === "option1") {
                setRadioOptionValue("Shuffle ingredients and cost");
            }

            if (radioOption === "option2") {
                setRadioOptionValue("Same ingredients and shuffle cost");
            }
        }

        setDateTime(new Date().toISOString());
    }

    const handleOptionChange = (e) => {
        setRadioOption(e.target.value);
    }

    return (
        <div>
            <h1 style={HeaderStyle}>
                Raftdomizer: Recipe Randomizer (WIP)
            </h1>
            <div style={ContainerStyle}>
                <div style={DivRight}>
                <h2>Options</h2>
                    <div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="option0"
                                    name="randomizerOption"
                                    checked={radioOption === "option0"}
                                    onChange = {(e) => handleOptionChange(e)}
                                />Vanilla
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="option1"
                                    name="randomizerOption"
                                    checked={radioOption === "option1"}
                                    onChange = {(e) => handleOptionChange(e)}
                                />Shuffle ingredients and cost
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="option2"
                                    name="randomizerOption"
                                    checked={radioOption === "option2"}
                                    onChange = {(e) => handleOptionChange(e)}
                                />Same ingredients and shuffle cost
                            </label>
                        </div>
                    </div>
                    <br />
                    <button style={ButtonStyle}
                        onClick={() => previewContent()}>Generate Preview</button>
                    <br />
                    <button onClick={() => saveJsonFile()}>Save Override</button>
                    <Instructions />
                    <div>
                        <h2>Not yet shuffled</h2>
                        <ul>
                            <li>Beehive</li>
                            <li>Shark Bait</li>
                            <li>Healing Salves</li>
                            <li>Decorations</li>
                            <li>Food</li>
                            <li>Trading Post recipes</li>
                        </ul>
                    </div>
                </div>
                <div style={DivLeft}>
                    <Preview
                        craftingMenuPreview={craftingMenuPreview}
                        radioOptionValue={radioOptionValue}
                        dateTime={dateTime}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;