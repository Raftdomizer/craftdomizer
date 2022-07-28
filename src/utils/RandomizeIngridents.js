import RandomizedIngridentsBaseCost from "../data/RandomizedIngridentsBaseCost";

const RandomizeIngridents = (section) => {
    const parsedJson = JSON.parse(JSON.stringify(RandomizedIngridentsBaseCost, null, 2));
    let updatedSection = [];
    section.forEach(element => {
        let tempObj = {};

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingridents = {};

        /* TODO: This is ugly, I know. Plan to fix it
         * We don't care about ingrients, just filling in the gaps
         * A cleaner way to find the values for dictionary keys.
         * Future Enhancement: Make replacements not 1:1
        */
        if (Object.keys(element).includes('ingridents')) {
            for (const ingrident in element.ingridents) {
                let randomIngridentIndex = Math.floor(Math.random() * Object.values(parsedJson).length);
                let randomIngrident = Object.keys(parsedJson)[randomIngridentIndex];
                // We reroll if the random ingrident matches the unique name
                if (element.uniqueName === randomIngrident) {
                    do {
                        randomIngridentIndex = Math.floor(Math.random() * Object.values(parsedJson).length);
                        randomIngrident = Object.keys(parsedJson)[randomIngridentIndex];
                    }
                    while (ingrident === randomIngrident)
                    console.log(`Duplicate Detected. Replaced: ${ingrident} with ${randomIngrident}`);
                }

                // TODO: This ALSO UGLY, I know... will fix it in future
                let adjustedCost = Object.entries(parsedJson).filter(x => {
                    return x[0] === randomIngrident
                }).map(y => {
                    return y[1];
                })[0];
                tempObj.ingridents[randomIngrident] = adjustedCost;
            }
        }
        updatedSection.push(tempObj);
    });

    return updatedSection;
}

export default RandomizeIngridents
