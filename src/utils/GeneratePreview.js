import CraftingSectionNamesEnums from "../utils/CraftingSectionNamesEnums";
import EmptyCraftingMenu from "../data/EmptyCraftingMenu.json";
import RandomizeBaseCost from "../utils/RandomizeBaseCost";
import RandomizeIngredients from "./RandomizeIngredients";
import UpdateCraftingMenu from "../utils/UpdateCraftingMenu";

const GeneratePreview = (parsedJson, radioOption) => {
    let randomizedCraftingMenu = JSON.parse(JSON.stringify(EmptyCraftingMenu, null, 2));

    // Iterate through each section of the json (other, tools, weapons, etc)
    for (const sectionKey in parsedJson) {
        let section = parsedJson[sectionKey];
        let updatedSection = [];

        for (const itemKey in section) {
            // Food & Water
            if (section[itemKey].foodWater) {
                if (radioOption === "option1") {
                    updatedSection = RandomizeIngredients(section[itemKey].foodWater);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (radioOption === "option2") {
                    updatedSection = RandomizeBaseCost(section[itemKey].foodWater);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.FoodWater);
            }

            // Other
            if (section[itemKey].other) {
                updatedSection = RandomizeIngredients(section[itemKey].other);
                updatedSection = RandomizeBaseCost(updatedSection);
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Other);
            }

            // Tools
            if (section[itemKey].tools) {
                updatedSection = RandomizeIngredients(section[itemKey].tools);
                updatedSection = RandomizeBaseCost(updatedSection);
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Tools);
            }

            // Weapons
            if (section[itemKey].weapons) {
                updatedSection = RandomizeIngredients(section[itemKey].weapons);
                updatedSection = RandomizeBaseCost(updatedSection);
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Weapons);
            }

            //
            // Equipment
            if (section[itemKey].equipment) {
                updatedSection = RandomizeIngredients(section[itemKey].equipment);
                updatedSection = RandomizeBaseCost(updatedSection);
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Equipment);
            }
            //

            // Resources
            if (section[itemKey].resources) {
                updatedSection = RandomizeIngredients(section[itemKey].resources);
                updatedSection = RandomizeBaseCost(updatedSection);
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Resources);
            }

            // Navigation
            if (section[itemKey].navigation) {
                updatedSection = RandomizeIngredients(section[itemKey].navigation);
                updatedSection = RandomizeBaseCost(updatedSection);
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