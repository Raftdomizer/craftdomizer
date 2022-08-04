import RandomizedIngredientsBaseCost from "../data/RandomizedIngredientsBaseCost";
import IngredientTier from "../data/IngredientTier.json";

const RandomizeIngredients = (section) => {
    const randomizedIngredientsBaseCost = JSON.parse(JSON.stringify(RandomizedIngredientsBaseCost, null, 2));
    const ingredientAndTier = JSON.parse(JSON.stringify(IngredientTier, null, 2));
    let updatedSection = [];
    section.forEach(element => {
        let tempObj = {};

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingredients = {};

        // Based on the IngredientTier file, determine which ingredients are allowed to be used.
        let allowedIngredients = [];
        for (const [ingredient, ingredientTier] of Object.entries(ingredientAndTier)) {
            if (element.uniqueName === ingredient) {
                let selectedIngredient = ingredient;
                let tier = ingredientTier;
                for (const [ingredient, ingredientTier] of Object.entries(ingredientAndTier)) {
                    if(selectedIngredient !== ingredient) {
                        if (ingredientTier < tier) {
                            allowedIngredients.push(ingredient);
                        }
                    }
                }
            }
        }
        //

        /* TODO: This is ugly, I know. Plan to fix it
         * We don't care about ingrients, just filling in the gaps
         * A cleaner way to find the values for dictionary keys.
         * Future Enhancement: Make replacements not 1:1
        */
        if (Object.keys(element).includes('ingredients')) {
            // TODO: Incorporate a random number of ingredients.
            // As of now, the number of ingredients required is vanilla.
            for (const ingredient in element.ingredients) {
                //
                if (allowedIngredients.length > 0) {
                    let randomIngredient = RandomizeIngredient(element.uniqueName, ingredient, allowedIngredients);
                    let adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);

                    tempObj.ingredients[randomIngredient] = adjustedCost;
                } else {
                    let randomIngredient = RandomizeIngredient(element.uniqueName, ingredient, Object.values(ingredientAndTier));
                    let adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);

                    tempObj.ingredients[randomIngredient] = adjustedCost;
                }
            }
        }
        updatedSection.push(tempObj);
    });

    return updatedSection;
}

const RandomizeIngredient = (uniqueName, ingredient, ingredientArray) => {
    let randomIngredientIndex = Math.floor(Math.random() * ingredientArray.length);
    let randomIngredient = ingredientArray[randomIngredientIndex];

    // We reroll if the random ingredient matches the unique name
    // A recipe should not require itself as an ingredient
    if (uniqueName === randomIngredient) {
        do {
            randomIngredientIndex = Math.floor(Math.random() * ingredientArray.length);
            randomIngredient = ingredientArray[randomIngredientIndex];
        }
        while (ingredient === randomIngredient)
    }

    return randomIngredient;
}

const ApplyAdjustedCost = (randomIngredient, randomizedIngredientsBaseCost) => {
    // TODO: This is still ugly, plan to clean it up in the future.
    // Should probably use Object.entries in a for-loop.
    let adjustedCost = Object.entries(randomizedIngredientsBaseCost).filter(x => {
        return x[0] === randomIngredient
    }).map(y => {
        return y[1];
    })[0];

    return adjustedCost;
}

export default RandomizeIngredients
