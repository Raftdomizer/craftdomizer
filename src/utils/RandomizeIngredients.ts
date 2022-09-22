import RandomizedIngredientsBaseCost from "../data/RandomizedIngredientsBaseCost.json";
import IngredientTier from "../data/IngredientTier.json";

import ComponentSubstitue from "../data/ComponentSubstitute.json";
import {UpdateAllowIngredientsFromToggles} from "../utils/SubstituteIngredients";
import { CraftingMenuItem } from "../data/Types"

/*
* TODO: Update section, updatedSection,
*/
const RandomizeIngredients = (section: CraftingMenuItem[] ) => {
    const randomizedIngredientsBaseCost = JSON.parse(JSON.stringify(RandomizedIngredientsBaseCost, null, 2));
    const ingredientAndTier = JSON.parse(JSON.stringify(IngredientTier, null, 2));
    // TODO: Instead of using combinations, use permutations instead.
    const substitueJson = JSON.parse(JSON.stringify(ComponentSubstitue, null, 2));
    let updatedSection: CraftingMenuItem[] = [];

    section.forEach((element: CraftingMenuItem) => {

        let tempObj: CraftingMenuItem = {
            uniqueName: "",
            ingredients: {}
        };

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingredients = {};

        // Based on the IngredientTier file, determine which ingredients are allowed to be used.
        // TODO: Find a cleaner way to implement this. Two loops feels excessive.
        let allowedIngredients = [];
        for (const [ingredient, ingredientTier] of Object.entries(ingredientAndTier)) {
            if (element.uniqueName === ingredient) {
                let selectedIngredient = ingredient;
                let tier = ingredientTier;
                for (const [ingredient, ingredientTier] of Object.entries(ingredientAndTier)) {
                    if (selectedIngredient !== ingredient) {
                        if (Number(ingredientTier) < Number(tier)) {
                            allowedIngredients.push(ingredient);
                        }
                    }
                }
            }
        }

        allowedIngredients = UpdateAllowIngredientsFromToggles(allowedIngredients);

        /* TODO: This is ugly, I know. Plan to fix it
         * We don't care about ingredients, just filling in the gaps
         * A cleaner way to find the values for dictionary keys.
         * Future Enhancement: Make replacements not 1:1
        */
        if (Object.keys(element).includes('ingredients')) {
            // TODO: Incorporate a random number of ingredients.
            // As of now, the number of ingredients required is vanilla.
            for (const ingredient in element.ingredients) {
                //
                if (allowedIngredients.length > 0) {
                    let randomIngredient = RandomizeIngredient(allowedIngredients);
                    let adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);

                    // Some flowers and fish come in many forms.
                    // Instead of adding each type to the JSON file, only one instances is present
                    // If that type is rolled (flowers, fish, etc), we substitute it component
                    if (randomIngredient.includes("substitute")) {
                        switch (randomIngredient) {
                            case "substitute_flowers":
                                randomIngredient = RandomizeIngredient(substitueJson.flowers);
                                break;
                            case "substitute_flower_seeds":
                                randomIngredient = RandomizeIngredient(substitueJson.flower_seeds);
                                break;
                            case "substitute_raw_small_fish":
                                randomIngredient = RandomizeIngredient(substitueJson.raw_small_fish);
                                break;
                            case "substitute_cooked_small_fish":
                                randomIngredient = RandomizeIngredient(substitueJson.cooked_small_fish);
                                break;
                            default:
                                randomIngredient;
                        }
                    }

                    tempObj.ingredients[randomIngredient] = adjustedCost;
                    // TODO: Determine if this code is actual used. I suspect it is not...
                } else {
                    let randomIngredient = RandomizeIngredient(Object.values(ingredientAndTier));
                    let adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);

                    tempObj.ingredients[randomIngredient] = adjustedCost;
                }
            }
        }
        updatedSection.push(tempObj);
    });
    return updatedSection;
}

const RandomizeIngredient = (ingredientArray: string[]) => {
    let randomIngredientIndex = Math.floor(Math.random() * ingredientArray.length);
    let randomIngredient = ingredientArray[randomIngredientIndex];

    return randomIngredient;
}

const ApplyAdjustedCost = (randomIngredient: string, randomizedIngredientsBaseCost: number) => {
    // TODO: This is still ugly, plan to clean it up in the future.
    // Should probably use Object.entries in a for-loop.
    let adjustedCost = Object.entries(randomizedIngredientsBaseCost).filter(x => {
        return x[0] === randomIngredient;
    }).map(y => {
        return y[1];
    })[0];

    return adjustedCost;
}

export default RandomizeIngredients;
