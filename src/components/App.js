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
import RadioButton from "./RadioButtons";

function App() {
    // Styles
    // TODO: Figure out a way to make styles play nicely with GitHub pages
    const HeaderStyle = {textAlign: "center"};
    const ButtonStyle = {marginRight: "25px"};
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
                Raftdomizer: Craftdomizer (WIP)
            </h1>
            <div style={ContainerStyle}>
                <div style={DivRight}>
                <Instructions />
                <h2>Options</h2>
                    <div>
                        <RadioButton
                                optionValue="option0"
                                optionName="randomizerOption"
                                radioOption={radioOption}
                                onChange={(e) => handleOptionChange(e)}
                                labelName="Vanilla"
                        />
                        <RadioButton
                                optionValue="option1"
                                optionName="randomizerOption"
                                radioOption={radioOption}
                                onChange={(e) => handleOptionChange(e)}
                                labelName="Shuffle ingredients and cost"
                        />
                        <RadioButton
                                optionValue="option2"
                                optionName="randomizerOption"
                                radioOption={radioOption}
                                onChange={(e) => handleOptionChange(e)}
                                labelName="Same ingredients and shuffle cost"
                        />
                    </div>
                    <br />
                    <button style={ButtonStyle}
                        onClick={() => previewContent()}>Generate Preview</button>
                    <button onClick={() => saveJsonFile()}>Save Override</button>
                    <div>
                        <h2>Future Features</h2>
                        <ul>
                            <li>Toggles for Flowers and various foods</li>
                            <li><a href="https://github.com/Raftdomizer/recipe-randomizer/blob/main/README.md#update-existing">And more to come</a></li>
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