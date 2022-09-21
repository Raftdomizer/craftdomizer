import CraftingSectionNamesEnums from "../data/CraftingSectionNamesEnums";
import {
    CraftingMenuItem,
    FoodWater,
    Other,
    Tools,
    Weapons,
    Equipment,
    Resources,
    Navigation
} from "../data/Types";

// TODO: Fix all the any types in this files to be proper types.
const UpdateCraftingMenu = (emptyCraftingMenu: { sections: any[]; }, updatedSection: CraftingMenuItem[], sectionName: string) => {
    // TODO: Fix this 'if magic string' section non-sense
    if (sectionName === CraftingSectionNamesEnums.FoodWater) {
        emptyCraftingMenu.sections.filter((x: { foodWater: FoodWater; }) => {
            return x.foodWater;
        }).map((y: { foodWater: CraftingMenuItem[]; }) => {
            return y.foodWater = updatedSection;
        });
    };

    // Other
    if (sectionName === CraftingSectionNamesEnums.Other) {
        emptyCraftingMenu.sections.filter((x: { other: Other; }) => {
            return x.other;
        }).map((y: { other: CraftingMenuItem[]; }) => {
            return y.other = updatedSection;
        });
    };

    // Tools
    if (sectionName === CraftingSectionNamesEnums.Tools) {
        emptyCraftingMenu.sections.filter((x: { tools: Tools; }) => {
            return x.tools;
        }).map((y: { tools: CraftingMenuItem[]; }) => {
            return y.tools = updatedSection;
        });
    };

    // Weapons
    if (sectionName === CraftingSectionNamesEnums.Weapons) {
        emptyCraftingMenu.sections.filter((x: { weapons: Weapons; }) => {
            return x.weapons;
        }).map((y: { weapons: CraftingMenuItem[]; }) => {
            return y.weapons = updatedSection;
        });
    };

    // Equipment
    if (sectionName === CraftingSectionNamesEnums.Equipment) {
        emptyCraftingMenu.sections.filter((x: { equipment: Equipment; }) => {
            return x.equipment;
        }).map((y: { equipment: CraftingMenuItem[]; }) => {
            return y.equipment = updatedSection;
        });
    };

    // Resources
    if (sectionName === CraftingSectionNamesEnums.Resources) {
        emptyCraftingMenu.sections.filter((x: { resources: Resources; }) => {
            return x.resources;
        }).map((y: { resources: CraftingMenuItem[]; }) => {
            return y.resources = updatedSection;
        });
    };

    // Navigation
    if (sectionName === CraftingSectionNamesEnums.Navigation) {
        emptyCraftingMenu.sections.filter((x: { navigation: Navigation; }) => {
            return x.navigation;
        }).map((y: { navigation: CraftingMenuItem[]; }) => {
            return y.navigation = updatedSection;
        });
    };

    return emptyCraftingMenu;
}

export default UpdateCraftingMenu
