// Application Components
import EmptyCraftingMenu from "../data/EmptyCraftingMenu.json";
import VanillaCraftingMenu from "../data/VanillaCraftingMenu.json";
import CraftingSectionNamesEnums from "./CraftingSectionNamesEnums";
import RandomizeBaseCost from "./RandomizeBaseCost";
import UpdateCraftingMenu from "./UpdateCraftingMenu";
import RandomizeIngredients from "./RandomizeIngredients";

const GeneratePreview = (optionValue: string) => {
    /*
    * TODO: Update variables section, updatedSection to be proper types
    */
    let randomizedCraftingMenu = JSON.parse(JSON.stringify(EmptyCraftingMenu, null, 2));
    let vanillaCraftingMenu = JSON.parse(JSON.stringify(VanillaCraftingMenu, null, 2));

    // Iterate through each section of the json (other, tools, weapons, etc)
    for (const sectionKey in vanillaCraftingMenu) {
        let section = vanillaCraftingMenu[sectionKey as keyof typeof vanillaCraftingMenu];
        let updatedSection: any[] = [];

        for (const itemKey in section) {
            // Food & Water
            if (section[itemKey].foodWater) {
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].foodWater);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
                    updatedSection = RandomizeBaseCost(section[itemKey].foodWater);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.FoodWater);
            }

            // Other
            if (section[itemKey].other) {
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].other);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
                    updatedSection = RandomizeBaseCost(section[itemKey].other);
                }
                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Other);
            }

            // Tools
            if (section[itemKey].tools) {
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].tools);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
                    updatedSection = RandomizeBaseCost(section[itemKey].tools);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Tools);
            }

            // Weapons
            if (section[itemKey].weapons) {
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].weapons);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
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
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].equipment);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
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
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].resources);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
                    updatedSection = RandomizeBaseCost(section[itemKey].resources);
                }

                randomizedCraftingMenu = UpdateCraftingMenu(
                    randomizedCraftingMenu,
                    updatedSection,
                    CraftingSectionNamesEnums.Resources);
            }

            // Navigation
            if (section[itemKey].navigation) {
                if (optionValue === "ShuffleIngredientsAndCost") {
                    updatedSection = RandomizeIngredients(section[itemKey].navigation);
                    updatedSection = RandomizeBaseCost(updatedSection);
                }

                if (optionValue === "KeepIngredientsShuffleCost") {
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

export default GeneratePreview;
