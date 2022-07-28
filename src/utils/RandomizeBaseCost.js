const RandomizeBaseCost = (section) => {
    console.log('section');
    console.log(section);
    let updatedSection = [];
    section.forEach(element => {
        let tempObj = {};

        tempObj.uniqueName = element.uniqueName;
        tempObj.ingridents = {};

        /*
        * Randomly assign cost of ingridents between .5 and 1.5 its base cost per ingrident
        */
        if (Object.keys(element).includes('ingridents')) {
            for (const ingrident in element.ingridents) {
                let cost = element.ingridents[ingrident];
                let minCost = Math.round(cost * .5);
                let maxCost = Math.round(cost * 1.5);
                let precision = 100; // 2 decimals
                let adjustedCost = Math.round(Math.floor((Math.random() * (maxCost * precision - minCost * precision) + minCost * precision) / (precision)));

                tempObj.ingridents[ingrident] = adjustedCost;
            }
        }

        console.log('tempObj');
        console.log(tempObj);
        updatedSection.push(tempObj);
    });

    console.log('updatedSection');
    console.log(updatedSection);
    return updatedSection;
}

export default RandomizeBaseCost
