import CraftingSectionNamesEnums from "../utils/CraftingSectionNamesEnums";
import EmptyCraftingMenu from "../data/EmptyCraftingMenu.json";
import RandomizeBaseCost from "../utils/RandomizeBaseCost";
import RandomizeIngredients from "./RandomizeIngredients";
import UpdateCraftingMenu from "../utils/UpdateCraftingMenu";

const GeneratePreview = (parsedJson, radioOption, toggles) => {
    let randomizedCraftingMenu = JSON.parse(JSON.stringify(EmptyCraftingMenu, null, 2));

    // Iterate through each section of the json (other, tools, weapons, etc)
    for (const sectionKey in parsedJson) {
        let section = parsedJson[sectionKey];
        let updatedSection = [];

        for (const itemKey in section) {
            // Food & Water
            if (section[itemKey].foodWater) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].foodWater, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].foodWater);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.FoodWater);
            }

            // Other
            if (section[itemKey].other) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].other, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].other);
                }
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Other);
            }

            // Tools
            if (section[itemKey].tools) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].tools, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].tools);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Tools);
            }

            // Weapons
            if (section[itemKey].weapons) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].weapons, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].weapons);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Weapons);
            }

            //
            // Equipment
            if (section[itemKey].equipment) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].equipment, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].equipment);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Equipment);
            }
            //

            // Resources
            if (section[itemKey].resources) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].resources, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].resources);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Resources);
            }

            // Navigation
            if (section[itemKey].navigation) {
                if (radioOption === "option0") {
                    updatedSection = RandomizeIngredients(section[itemKey].navigation, toggles);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option1") {
                    updatedSection = RandomizeBaseCost(section[itemKey].navigation);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Navigation);
            }
        }

        return randomizedCraftingMenu;
    }
}

export default GeneratePreview