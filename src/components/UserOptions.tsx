// Libraries
import FileSaver from "file-saver";
import React from "react";

// State management
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from '../redux/store';
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

// Custom Components
import GeneratePreview from "../utils/GeneratePreview";

// MUI
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';

const UserOptions = () => {
    const dispatch: AppDispatch = useDispatch();
    // TODO: Update states with type 'anys' to a proper type
    let craftingMenuPreview = useSelector((state: RootState) => state.userOptions.craftingMenuPreview);
    const optionValue = useSelector((state: RootState) => state.userOptions.shuffleOptionName);

    const includeFlowers = useSelector((state: RootState) => state.userOptions.includeFlowers);
    const includeFlowerSeeds = useSelector((state: RootState) => state.userOptions.includeFlowerSeeds);
    const includeFish = useSelector((state: RootState) => state.userOptions.includeFish);
    const includeGrowableCrops = useSelector((state: RootState) => state.userOptions.includeGrowableCrops);

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

        FileSaver.saveAs(blob, "CraftingMenuOverride.json");
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
            <br />
            <FormControl>
                <FormLabel id="options-controlled-radio-buttons-group">User Options</FormLabel>
                <RadioGroup
                    aria-labelledby="options-controlled-radio-buttons-group"
                    name="randomizerOption"
                    value={optionValue}
                    onChange={(e) => handleOptionChange(e)}
                >
                    <FormControlLabel value="ShuffleIngredientsAndCost" control={<Radio />} label="Shuffle ingredients and cost" />
                    <div>
                        {optionValue === "ShuffleIngredientsAndCost" &&
                            <div>
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                    <FormControl component="fieldset" variant="standard">
                                        <FormLabel component="legend">Include</FormLabel>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                                            <FormGroup aria-label="position">
                                                <FormControlLabel
                                                    value="flowers"
                                                    control={<Checkbox />}
                                                    label="Flowers"
                                                    checked={includeFlowers}
                                                    onChange={() => { dispatch(toggleFlowers()) }}
                                                />
                                                <FormControlLabel
                                                    value="flowerSeeds"
                                                    control={<Checkbox />}
                                                    label="Flower Seeds"
                                                    checked={includeFlowerSeeds}
                                                    onChange={() => { dispatch(toggleFlowerSeeds()) }}
                                                />
                                                <FormControlLabel
                                                    value="fish"
                                                    control={<Checkbox />}
                                                    label="Fish"
                                                    checked={includeFish}
                                                    onChange={() => { dispatch(toggleFish()) }}
                                                />
                                                <FormControlLabel
                                                    value="growableCrops"
                                                    control={<Checkbox />}
                                                    label="Growable Crops"
                                                    checked={includeGrowableCrops}
                                                    onChange={() => { dispatch(toggleGrowableCrops()) }}
                                                />
                                            </FormGroup>
                                        </Box>
                                    </FormControl>
                                </Box>
                            </div>}
                    </div>
                    <FormControlLabel value="KeepIngredientsShuffleCost" control={<Radio />} label="Keep ingredients. Shuffle cost" />
                </RadioGroup>
            </FormControl>
            <br />
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={previewContent}>
                    Generate Preview
                </Button>
                <Button variant="contained" onClick={saveJsonFile}>
                    Save Override
                </Button>
            </Stack>
        </div>
    )
}

export default UserOptions;
