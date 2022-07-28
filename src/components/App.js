// Libraries
import React, { useState } from "react";
import FileSaver from "file-saver";


// Applicaiton components
import vanillaCraftingMenu from "../data/VanillaCraftingMenu.json";
import CraftingSectionNamesEnums from "../utils/CraftingSectionNamesEnums";
import RandomizeBaseCost from "../utils/RandomizeBaseCost";
import RandomizeIngridents from "../utils/RandomizeIngridents";
import UpdateCraftingMenu from "../utils/UpdateCraftingMenu";

// Styles
import "./App.css"

function App() {

    const vanilla = vanillaCraftingMenu;
    let emptyCraftingMenu = {
        "sections": [
            { "foodWater": [] },
            { "other": [] },
            { "tools": [] },
            { "weapons": [] },
            { "resources": [] },
            { "navigation": [] }
        ]
    };

    const [craftingMenuPreview, setCraftingMenuPreview] = useState(JSON.stringify(emptyCraftingMenu, null, 2));
    const [count, setCount] = useState(0);
    const [radioOption, setRadioOption] = useState("option1");

    const saveJsonFile = async () => {
        const blob = new Blob(
            [JSON.stringify(emptyCraftingMenu, null, 2)],
            { type: "text/plain;charset=utf-8" });

        FileSaver.saveAs(blob, "RecipeOverride.json");
    };

    // TODO: Move this whole function(s) into its own container component
    const previewContent = () => {
        const parsedJson = JSON.parse(JSON.stringify(vanilla, null, 2));

        // Iterate through each section of the json (other, tools, weapons, etc)
        for (const sectionKey in parsedJson) {
            let section = parsedJson[sectionKey];
            let updatedSection = [];

            for (const itemKey in section) {
                // Food & Water
                if (section[itemKey].foodWater) {
                    if (radioOption === "option1") {
                        updatedSection = RandomizeIngridents(section[itemKey].foodWater);
                        updatedSection = RandomizeBaseCost(updatedSection);
                    }

                    if (radioOption === "option2") {
                        updatedSection = RandomizeBaseCost(section[itemKey].foodWater);
                    }

                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.FoodWater);
                }

                // Other
                if (section[itemKey].other) {
                    /*
                     * TODO: The other object does not include simple bed
                     * Missing the correctly uniqueName on the mods side
                    */
                    updatedSection = RandomizeIngridents(section[itemKey].other);
                    updatedSection = RandomizeBaseCost(updatedSection);
                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.Other);
                }

                // Tools
                if (section[itemKey].tools) {
                    updatedSection = RandomizeIngridents(section[itemKey].tools);
                    updatedSection = RandomizeBaseCost(updatedSection);
                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.Tools);
                }

                // Weapons
                if (section[itemKey].weapons) {
                    updatedSection = RandomizeIngridents(section[itemKey].weapons);
                    updatedSection = RandomizeBaseCost(updatedSection);
                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.Weapons);
                }

                // Resources
                if (section[itemKey].resources) {
                    updatedSection = RandomizeIngridents(section[itemKey].resources);
                    updatedSection = RandomizeBaseCost(updatedSection);
                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.Resources);
                }

                // Navigation
                if (section[itemKey].navigation) {
                    // emptyCraftingMenu = RandomizeBaseCost(
                    //     emptyCraftingMenu,
                    //     section[itemKey].navigation,
                    //     CraftingSectionNamesEnums.Navigation);
                    updatedSection = RandomizeIngridents(section[itemKey].navigation);
                    updatedSection = RandomizeBaseCost(updatedSection);
                    emptyCraftingMenu = UpdateCraftingMenu(
                        emptyCraftingMenu,
                        updatedSection,
                        CraftingSectionNamesEnums.Navigation);
                }
            }
        }

        //setCraftingMenuPreview(craftingMenuPreview + 1);
        setCount(count + 1);
        setCraftingMenuPreview(JSON.stringify(emptyCraftingMenu, null, 2));
        console.log(emptyCraftingMenu);
    }

    const handleOptionChange = (e) => {
        console.log('hit');
        console.log(e);
        setRadioOption(e.target.value);
    }

    return (
        <div>
            <h1>
                Raftdomizer Alpha UI (WIP)
            </h1>
            <div className="container">
                <div className="right">
                <p>Options</p>
                    <div>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="option1"
                                    name="randomizerOption"
                                    checked={radioOption === "option1"}
                                    onChange = {(e) => handleOptionChange(e)}
                                />Shuffle ingridents and cost
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
                                />Same ingridents and shuffle cost
                            </label>
                        </div>
                    </div>
                    <br />
                    <button onClick={() => previewContent()}>Preview Content</button>
                    <br />
                    <button onClick={() => saveJsonFile()}>Save Override</button>
                </div>
                <div className="left">
                    <p>Recipe Override Preview</p>
                    <textarea
                        disabled
                        key="textarea"
                        rows="40"
                        cols="100"
                        value={craftingMenuPreview}
                        onChange={(e) => {}} // Feels hacky...patchwork. But works.
                    >
                    </textarea>
                </div>
            </div>
        </div>
    );
}

export default App;