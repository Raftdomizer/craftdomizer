import CraftingSectionNamesEnums from "./CraftingSectionNamesEnums";

// TODO: Fix all the any types in this files to be proper types.
const UpdateCraftingMenu = (emptyCraftingMenu: { sections: any[]; }, updatedSection: any[], sectionName: string) => {
    // TODO: Fix this 'if magic string' section non-sense
    if (sectionName === CraftingSectionNamesEnums.FoodWater) {
        emptyCraftingMenu.sections.filter((x: { foodWater: any; }) => {
            return x.foodWater;
        }).map((y: { foodWater: any; }) => {
            return y.foodWater = updatedSection;
        });
    };

    // Other
    if (sectionName === CraftingSectionNamesEnums.Other) {
        emptyCraftingMenu.sections.filter((x: { other: any; }) => {
            return x.other;
        }).map((y: { other: any; }) => {
            return y.other = updatedSection;
        });
    };

    // Tools
    if (sectionName === CraftingSectionNamesEnums.Tools) {
        emptyCraftingMenu.sections.filter((x: { tools: any; }) => {
            return x.tools;
        }).map((y: { tools: any; }) => {
            return y.tools = updatedSection;
        });
    };

    // Weapons
    if (sectionName === CraftingSectionNamesEnums.Weapons) {
        emptyCraftingMenu.sections.filter((x: { weapons: any; }) => {
            return x.weapons;
        }).map((y: { weapons: any; }) => {
            return y.weapons = updatedSection;
        });
    };

    // Equipment
    if (sectionName === CraftingSectionNamesEnums.Equipment) {
        emptyCraftingMenu.sections.filter((x: { equipment: any; }) => {
            return x.equipment;
        }).map((y: { equipment: any; }) => {
            return y.equipment = updatedSection;
        });
    };

    // Resources
    if (sectionName === CraftingSectionNamesEnums.Resources) {
        emptyCraftingMenu.sections.filter((x: { resources: any; }) => {
            return x.resources;
        }).map((y: { resources: any; }) => {
            return y.resources = updatedSection;
        });
    };

    // Navigation
    if (sectionName === CraftingSectionNamesEnums.Navigation) {
        emptyCraftingMenu.sections.filter((x: { navigation: any; }) => {
            return x.navigation;
        }).map((y: { navigation: any; }) => {
            return y.navigation = updatedSection;
        });
    };

    return emptyCraftingMenu;
}

export default UpdateCraftingMenu
