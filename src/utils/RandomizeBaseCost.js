const RandomizeBaseCost = (section) => {
    let updatedSection = [];
    section.forEach(element => {
        let tempObj = {};

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingredients = {};

        /*
        * Randomly assign cost of ingredients between .5 and 1.5 its base cost per ingredient
        */
        if (Object.keys(element).includes('ingredients')) {
            for (const ingredient in element.ingredients) {
                let cost = element.ingredients[ingredient];
                let minCost = Math.round(cost * .5);
                let maxCost = Math.round(cost * 1.5);
                let precision = 100; // 2 decimals
                let adjustedCost = Math.round(Math.floor((Math.random() * (maxCost * precision - minCost * precision) + minCost * precision) / (precision)));

                tempObj.ingredients[ingredient] = adjustedCost;
            }
        }
        updatedSection.push(tempObj);
    });
    return updatedSection;
}

export default RandomizeBaseCost
