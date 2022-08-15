import RandomizedIngredientsBaseCost from "../data/RandomizedIngredientsBaseCost";
import IngredientTier from "../data/IngredientTier.json";

const RandomizeIngredients = (section) => {
    const randomizedIngredientsBaseCost = JSON.parse(JSON.stringify(RandomizedIngredientsBaseCost, null, 2));
    const ingredientAndTier = JSON.parse(JSON.stringify(IngredientTier, null, 2));
    let updatedSection = [];
    let seedCount = 0;
    let flowerCount = 0;

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
                    let seedString = "_seed";
                    let flowerString = "_flower";

                    let randomIngredientIncludesSeed = randomIngredient.includes(seedString);
                    let randomIngredientIncludesFlower = randomIngredient.includes(flowerString);

                    // Due to the vast number of Tier 0 items which are seeds and flowers.
                    // We keep track of how many times seeds or flowers components are rolled.
                    if (randomIngredientIncludesSeed){
                        seedCount = seedCount + 1;
                    }

                    if (randomIngredientIncludesFlower){
                        flowerCount = flowerCount + 1;
                    }

                    // If a section has too many seeds, we reroll the component.
                    if (seedCount > 1 && randomIngredientIncludesSeed) {
                        do {
                            randomIngredient = RandomizeIngredient(allowedIngredients);
                            adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);
                        } while (randomIngredient.includes(seedString));
                    }

                    // If a section has too many flowers, we reroll the component.
                    if (flowerCount > 1 && randomIngredientIncludesFlower) {
                        do {
                            randomIngredient = RandomizeIngredient(allowedIngredients);
                            adjustedCost = ApplyAdjustedCost(randomIngredient, randomizedIngredientsBaseCost);
                        } while (randomIngredient.includes(flowerString));
                    }

                    tempObj.ingredients[randomIngredient] = adjustedCost;
                // TODO: Determine if this code is actual used. I suspect it is not...
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

const RandomizeIngredient = (ingredientArray) => {
    let randomIngredientIndex = Math.floor(Math.random() * ingredientArray.length);
    let randomIngredient = ingredientArray[randomIngredientIndex];

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
