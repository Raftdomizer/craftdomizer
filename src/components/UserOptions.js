import FileSaver from "file-saver";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    resetToggles,
    selectKeepIngredientsShuffleCost,
    selectShuffleIngredientsAndCost,
    setlastGeneratedPreviewOptionName,
    setlastGeneratedPreviewTimeStamp,
    setRandomizedCraftingMenu,
    toggleFish,
    toggleFlowers,
    toggleFlowerSeeds,
    toggleGrowableCrops
} from "../redux/slices/userOptionsSlice";
import RadioButton from "./common/RadioButton";

// Custom Components
import GeneratePreview from "../utils/GeneratePreview";

const UserOptions = () => {
    // Styles
    const ButtonStyle = { marginRight: "25px" };

    const dispatch = useDispatch();
    let craftingMenuPreview = useSelector((state) => state.userOptions.craftingMenuPreview);
    const optionValue = useSelector((state) => state.userOptions.shuffleOptionName);

    const includeFlowers = useSelector((state) => state.userOptions.includeFlowers);
    const includeFlowerSeeds = useSelector((state) => state.userOptions.includeFlowerSeeds);
    const includeFish = useSelector((state) => state.userOptions.includeFish);
    const includeGrowableCrops = useSelector((state) => state.userOptions.includeGrowableCrops);

    const handleOptionChange = (e) => {
        let optionValue = e.target.value;
        if (optionValue === "ShuffleIngredientsAndCost") {
            dispatch(selectShuffleIngredientsAndCost());
        }

        if (optionValue === "KeepIngredientsShuffleCost") {
            dispatch(selectKeepIngredientsShuffleCost());
        }
        dispatch(resetToggles());
    }

    const saveJsonFile = async () => {
        const blob = new Blob(
            [JSON.stringify(craftingMenuPreview, null, 2)],
            { type: "text/plain;charset=utf-8" });

        FileSaver.saveAs(blob, "RecipeOverride.json");
    };

    const previewContent = () => {
        dispatch(setRandomizedCraftingMenu(GeneratePreview(optionValue)));

        if (optionValue === "ShuffleIngredientsAndCost") {
            dispatch(setlastGeneratedPreviewOptionName("Shuffle ingredients and cost"));
        }

        if (optionValue === "KeepIngredientsShuffleCost") {
            dispatch(setlastGeneratedPreviewOptionName("Keep ingredients. Shuffle cost"));
        }

        let timeStamp = new Date().toISOString();
        dispatch((setlastGeneratedPreviewTimeStamp(timeStamp)));
    }

    return (
        <div>
            <h2>Options</h2>
            <div>
                <RadioButton
                    optionValue="ShuffleIngredientsAndCost"
                    optionName="randomizerOption"
                    radioOption={optionValue}
                    onChange={(e) => handleOptionChange(e)}
                    labelName="Shuffle ingredients and cost"
                />
                {optionValue === "ShuffleIngredientsAndCost" &&
                    <div>
                        <strong style={{ marginLeft: "25px" }}>Include</strong>
                        <div style={{ marginLeft: "35px" }}>
                            <input
                                type="checkbox"
                                id="flowers"
                                name="flowers"
                                checked={includeFlowers}
                                onChange={() => { dispatch(toggleFlowers()) }}
                            />
                            <label htmlFor="flowers">Flowers</label>
                        </div>
                        <div style={{ marginLeft: "35px" }}>
                            <input
                                type="checkbox"
                                id="flowerSeeds"
                                name="flowerSeeds"
                                checked={includeFlowerSeeds}
                                onChange={() => { dispatch(toggleFlowerSeeds()) }}
                            />
                            <label htmlFor="flowerSeeds">Flower Seeds</label>
                        </div>
                        <div style={{ marginLeft: "35px" }}>
                            <input
                                type="checkbox"
                                id="fish"
                                name="fish"
                                checked={includeFish}
                                onChange={() => { dispatch(toggleFish()) }}
                            />
                            <label htmlFor="fish">Fish</label>
                        </div>
                        <div style={{ marginLeft: "35px" }}>
                            <input
                                type="checkbox"
                                id="growableCrops"
                                name="growableCrops"
                                checked={includeGrowableCrops}
                                onChange={() => { dispatch(toggleGrowableCrops()) }}
                            />
                            <label htmlFor="growableCrops">Growable Crops</label>
                        </div>
                    </div>}
                <RadioButton
                    optionValue="KeepIngredientsShuffleCost"
                    optionName="randomizerOption"
                    radioOption={optionValue}
                    onChange={(e) => handleOptionChange(e)}
                    labelName="Keep ingredients. Shuffle cost"
                />
            </div>
            <br />
            <button style={ButtonStyle}
                onClick={() => previewContent()}>Generate Preview</button>
            <button onClick={() => saveJsonFile()}>Save Override</button>
        </div>
    )
}

export default UserOptions;
