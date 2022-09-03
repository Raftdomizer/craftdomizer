import { createSlice } from "@reduxjs/toolkit";
// import VanillaCraftingMenu from "../../data/VanillaCraftingMenu.json";
import {VanillaCraftingMenu} from "../../data/VanillaCraftingMenu.js";

const parsedVanilla = VanillaCraftingMenu;

export const userOptionsSlice = createSlice({
    name: "userOptions",
    initialState: {
        craftingMenuPreview: parsedVanilla,
        shuffleOptionName: "ShuffleIngredientsAndCost",
        includeFlowers: false,
        includeFlowerSeeds: false,
        includeFish: false,
        includeGrowableCrops: false,
        lastGeneratedPreviewTimeStamp: null,
        lastGeneratedPreviewOptionName: null,
        showSpoiler: true,
    },
    reducers: {
        resetCraftingMenuPreview: (state) => {
            state.craftingMenuPreview = null;
        },
        setVanillaCraftingMenu: (state) => {
            state.craftingMenuPreview = parsedVanilla;
        },
        setRandomizedCraftingMenu: (state, action) => {
            state.craftingMenuPreview = action.payload;
        },
        setlastGeneratedPreviewTimeStamp: (state, action) => {
            state.lastGeneratedPreviewTimeStamp = action.payload
        },
        setlastGeneratedPreviewOptionName: (state, action) => {
            state.lastGeneratedPreviewOptionName = action.payload;
        },
        toggleSpoiler: (state) => {
            state.showSpoiler ? state.showSpoiler = false : state.showSpoiler = true;
        },
        selectShuffleIngredientsAndCost: (state) => {
            state.shuffleOptionName = "ShuffleIngredientsAndCost";
        },
        selectKeepIngredientsShuffleCost: (state) => {
            state.shuffleOptionName = "KeepIngredientsShuffleCost";
        },
        toggleFlowers: (state) => {
            state.includeFlowers ? state.includeFlowers = false : state.includeFlowers = true;
        },
        toggleFlowerSeeds: (state) => {
            state.includeFlowerSeeds ? state.includeFlowerSeeds = false : state.includeFlowerSeeds = true;
        },
        toggleFish: (state) => {
            state.includeFish ? state.includeFish = false : state.includeFish = true;
        },
        toggleGrowableCrops: (state) => {
            state.includeGrowableCrops ? state.includeGrowableCrops = false : state.includeGrowableCrops = true;
        },
        resetToggles: (state) => {
            state.includeFlowers = false;
            state.includeFlowerSeeds = false;
            state.includeFish = false;
            state.includeGrowableCrops = false;
        }
    }
});

export const {resetCraftingMenuPreview,
    setVanillaCraftingMenu,
    setRandomizedCraftingMenu,
    setlastGeneratedPreviewTimeStamp,
    setlastGeneratedPreviewOptionName,
    toggleSpoiler,
    selectShuffleIngredientsAndCost,
    selectKeepIngredientsShuffleCost,
    toggleFlowers,
    toggleFlowerSeeds,
    toggleFish,
    toggleGrowableCrops,
    resetToggles
} = userOptionsSlice.actions;

export default userOptionsSlice.reducer;
