// Libraries
import React, { useState, setState } from "react";
import FileSaver from "file-saver";

// Data
import VanillaCraftingMenu from "../data/VanillaCraftingMenu";
import EmptyCraftingMenu from "../data/EmptyCraftingMenu";

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
    const [lastGeneratedPreview, setLastGeneratedPreview] = useState("Vanilla");
    const [dateTime, setDateTime] = useState(new Date().toISOString());
    const [toggles, setToggles] = useState({
        flowers: false,
        flowerSeeds: false,
        fish: false,
        growableCrops: false
    });

    const saveJsonFile = async () => {
        const blob = new Blob(
            [craftingMenuPreview],
            { type: "text/plain;charset=utf-8" });

            FileSaver.saveAs(blob, "RecipeOverride.json");
    };

    // TODO: Move this whole function(s) into its own container component
    const previewContent = () => {
        const parsedJson = parsedVanilla;

        emptyCraftingMenu = GeneratePreview(parsedJson, radioOption, toggles);
        setCraftingMenuPreview(JSON.stringify(emptyCraftingMenu, null, 2));

        if (radioOption === "option0") {
            setLastGeneratedPreview("Shuffle ingredients and cost");
        }

        if (radioOption === "option1") {
            setLastGeneratedPreview("Keep ingredients. Shuffle cost");
        }

        setDateTime(new Date().toISOString());
    }

    const previewVanilla = () => {
        setCraftingMenuPreview(JSON.stringify(VanillaCraftingMenu, null, 2));
        setLastGeneratedPreview("Vanilla");
        setToggles(prevState => ({
            ...prevState,
            flowers: false,
            flowerSeeds: false,
            fish: false,
        }));
    }

    const handleOptionChange = (e) => {
        setRadioOption(e.target.value);
        setToggles(prevState => ({
            ...prevState,
            flowers: false,
            flowerSeeds: false,
            fish: false,
        }));
    }

    // TODO: Checkboxes are basically the same code. Should probably make it dynamic
    const handleFlowersCheckBoxChange = () => {
        if (toggles.flowers) {
            setToggles(prevState => ({
                ...prevState,
                flowers: false
            }));
        } else {
            setToggles(prevState => ({
                ...prevState,
                flowers: true
            }));
        }
    }

    const handleFlowerSeedsCheckBoxChange = () => {
        if (toggles.flowerSeeds) {
            setToggles(prevState => ({
                ...prevState,
                flowerSeeds: false
            }));
        } else {
            setToggles(prevState => ({
                ...prevState,
                flowerSeeds: true
            }));
        }
    }

    const handleFishCheckBoxChange = () => {
        if (toggles.fish) {
            setToggles(prevState => ({
                ...prevState,
                fish: false
            }));
        } else {
            setToggles(prevState => ({
                ...prevState,
                fish: true
            }));
        }
    }

    const handleGrowableCropsCheckBoxChange = () => {
        if (toggles.growableCrops) {
            setToggles(prevState => ({
                ...prevState,
                growableCrops: false
            }));
        } else {
            setToggles(prevState => ({
                ...prevState,
                growableCrops: true
            }));
        }
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
                                labelName="Shuffle ingredients and cost"
                        />
                        {radioOption === "option0" &&
                        <div>
                            <strong style={{marginLeft:"25px"}}>Include</strong>
                            <div style={{marginLeft: "35px"}}>
                                <input
                                    type="checkbox"
                                    id="flowers"
                                    name="flowers"
                                    checked={toggles.flowers}
                                    onChange={handleFlowersCheckBoxChange}
                                />
                                <label htmlFor="flowers">Flowers</label>
                            </div>
                            <div style={{marginLeft: "35px"}}>
                                <input
                                    type="checkbox"
                                    id="flowerSeeds"
                                    name="flowerSeeds"
                                    checked={toggles.flowerSeeds}
                                    onChange={handleFlowerSeedsCheckBoxChange}
                                />
                                <label htmlFor="flowerSeeds">Flower Seeds</label>
                            </div>
                            <div style={{marginLeft: "35px"}}>
                                <input
                                    type="checkbox"
                                    id="fish"
                                    name="fish"
                                    checked={toggles.fish}
                                    onChange={handleFishCheckBoxChange}
                                />
                                <label htmlFor="fish">Fish</label>
                            </div>
                            <div style={{marginLeft: "35px"}}>
                                <input
                                    type="checkbox"
                                    id="growableCrops"
                                    name="growableCrops"
                                    checked={toggles.growableCrops}
                                    onChange={handleGrowableCropsCheckBoxChange}
                                />
                                <label htmlFor="growableCrops">Growable Crops</label>
                            </div>
                        </div>}
                        <RadioButton
                                optionValue="option1"
                                optionName="randomizerOption"
                                radioOption={radioOption}
                                onChange={(e) => handleOptionChange(e)}
                                labelName="Keep ingredients. Shuffle cost"
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
                        lastGeneratedPreview={lastGeneratedPreview}
                        dateTime={dateTime}
                    />
                    <button style={ButtonStyle}
                        onClick={() => previewVanilla()}>Preview Vanilla</button>
                </div>
            </div>
        </div>
    );
}

export default App;