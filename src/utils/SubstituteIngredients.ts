import store from "../redux/store";
const state = store.getState();

const toggles = {
    includeFlowers: state.userOptions.includeFlowers,
    includeFlowerSeeds: state.userOptions.includeFlowerSeeds,
    includeFishes: state.userOptions.includeFish,
    includeGrowableCrops: state.userOptions.includeGrowableCrops
};

export const UpdateAllowIngredientsFromToggles = (allowedIngredients: string[]) => {
    if (!toggles.includeFlowers) {
        allowedIngredients = allowedIngredients.filter((ingredient: string) => ingredient != "substitute_flowers");
    }

    if (!toggles.includeFlowerSeeds) {
        allowedIngredients = allowedIngredients.filter((ingredient: string) => ingredient != "substitute_flower_seeds");
    }

    if (!toggles.includeFishes) {
        allowedIngredients = allowedIngredients.filter((ingredient: string) => {
            return ingredient != "substitute_raw_small_fish" &&
                ingredient != "substitute_cooked_small_fish" &&
                ingredient != "raw_salmon#raw_catfish" &&
                ingredient != "cooked_salmon#cooked_catfish";
        });
    }

    if (!toggles.includeGrowableCrops) {
        allowedIngredients = allowedIngredients.filter((ingredient: string) => {
            return ingredient != "raw_potato#raw_beet" &&
                ingredient != "cooked_potato#cooked_beet" &&
                ingredient != "watermelon#pineapple" &&
                ingredient != "pineapple_seed#watermelon_seed" &&
                ingredient != "mango#coconut" &&
                ingredient != "palm_seed#mango_seed" &&
                ingredient != "pinecone" &&
                ingredient != "birch_seed" &&
                ingredient != "strawberry" &&
                ingredient != "banana" &&
                ingredient != "strawberry_seed" &&
                ingredient != "banana_seed"
        });
    }

    return allowedIngredients;
}

