export interface Sections {
    foodWater: FoodWater[];
    other: Other[];
    tools: Tools[];
    weapons: Weapons[];
    equipment: Equipment[];
    resources: Resources[];
    navigation: Navigation[];
}

export interface FoodWater {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Other {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Tools {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Weapons {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Equipment {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Resources {
    craftingMenuItem: CraftingMenuItem[];
}

export interface Navigation {
    craftingMenuItem: CraftingMenuItem[];
}

export interface BaseSection {
    craftingMenuItem: CraftingMenuItem[];
}


export interface CraftingMenuItem {
    uniqueName: string;
    ingredients: Record<string, number>;
}

export interface EmptyCraftingMenu {
    sections: Sections
}