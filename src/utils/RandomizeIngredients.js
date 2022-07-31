import RandomizedIngredientsBaseCost from "../data/RandomizedIngredientsBaseCost";

const RandomizeIngredients = (section) => {
    const parsedJson = JSON.parse(JSON.stringify(RandomizedIngredientsBaseCost, null, 2));
    let updatedSection = [];
    section.forEach(element => {
        let tempObj = {};

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingredients = {};

        /* TODO: This is ugly, I know. Plan to fix it
         * We don't care about ingrients, just filling in the gaps
         * A cleaner way to find the values for dictionary keys.
         * Future Enhancement: Make replacements not 1:1
        */
        if (Object.keys(element).includes('ingredients')) {
            for (const ingredient in element.ingredients) {
                let randomIngredientIndex = Math.floor(Math.random() * Object.values(parsedJson).length);
                let randomIngredient = Object.keys(parsedJson)[randomIngredientIndex];
                // We reroll if the random ingredient matches the unique name
                if (element.uniqueName === randomIngredient) {
                    do {
                        randomIngredientIndex = Math.floor(Math.random() * Object.values(parsedJson).length);
                        randomIngredient = Object.keys(parsedJson)[randomIngredientIndex];
                    }
                    while (ingredient === randomIngredient)
                    // console.log(`Duplicate Detected. Replaced: ${ingredient} with ${randomIngredient}`); // Debug purposes
                }

                // TODO: This ALSO UGLY, I know... will fix it in future
                let adjustedCost = Object.entries(parsedJson).filter(x => {
                    return x[0] === randomIngredient
                }).map(y => {
                    return y[1];
                })[0];
                tempObj.ingredients[randomIngredient] = adjustedCost;
            }
        }
        updatedSection.push(tempObj);
    });

    return updatedSection;
}

export default RandomizeIngredients
