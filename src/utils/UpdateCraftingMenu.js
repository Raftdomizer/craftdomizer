import CraftingSectionNamesEnums from "../utils/CraftingSectionNamesEnums";

const UpdateCraftingMenu = (emptyCraftingMenu, updatedSection, sectionName) => {
    // TODO: Fix this 'if magic string' section non-sense
    if (sectionName === CraftingSectionNamesEnums.FoodWater) {
        emptyCraftingMenu.sections.filter(x => {
            return x.foodWater;
        }).map(y => {
            return y.foodWater = updatedSection;
        });
    };

    // Other
    if (sectionName === CraftingSectionNamesEnums.Other) {
        emptyCraftingMenu.sections.filter(x => {
            return x.other;
        }).map(y => {
            return y.other = updatedSection;
        });
    };

    // Tools
    if (sectionName === CraftingSectionNamesEnums.Tools) {
        emptyCraftingMenu.sections.filter(x => {
            return x.tools;
        }).map(y => {
            return y.tools = updatedSection;
        });
    };

    // Weapons
    if (sectionName === CraftingSectionNamesEnums.Weapons) {
        emptyCraftingMenu.sections.filter(x => {
            return x.weapons;
        }).map(y => {
            return y.weapons = updatedSection;
        });
    };

    // Equipment
    if (sectionName === CraftingSectionNamesEnums.Equipment) {
        emptyCraftingMenu.sections.filter(x => {
            return x.equipment;
        }).map(y => {
            return y.equipment = updatedSection;
        });
    };

    // Resources
    if (sectionName === CraftingSectionNamesEnums.Resources) {
        emptyCraftingMenu.sections.filter(x => {
            return x.resources;
        }).map(y => {
            return y.resources = updatedSection;
        });
    };

    // Navigation
    if (sectionName === CraftingSectionNamesEnums.Navigation) {
        emptyCraftingMenu.sections.filter(x => {
            return x.navigation;
        }).map(y => {
            return y.navigation = updatedSection;
        });
    };

    return emptyCraftingMenu;
}

export default UpdateCraftingMenu
