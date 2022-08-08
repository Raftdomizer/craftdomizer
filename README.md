# What is Raftdomizer?

In its current state, Raftdomizer allows for the user to load a file generated from https://raftdomizer.github.io/recipe-randomizer. The file generated, `RecipeOverride.json`, can shuffle the resources/materials and/or quantities for each item in the crafting menu with some exceptions. Currently it is limited to anything in the crafting menu except of decorations and food based items (see 'Future' section). Once the file is generated, it should be placed in `mods\ModData\RecipeRandomizer` folder (feel free to create this folder if it does not exist). When the mod is loaded it will read the contents of the generated file and update the in-game recipes with what is in the `RecipeOverride.json` file. It is recommended that a fresh world is used for this. With that said, the user is free to use an existing world and/or modify the json file to meet their needs.
# So it is not truely random?
The short answer is no. If anything it is a glorified Crafting Menu adjuster with the added bonus of randomizing recipes. As such if the user finds that the crafting recipes are either too generous or difficult, they can be adjusted. In a future state, I would like to store this information in game and then allow the user to override it if they like.

# Will this work with other mods?
Depends on what other mods it is loaded with. This mod does override a number of the vanilla recipes so any other mods that perform that operation may yield varying results.

# How are the random quantities for each crafted item determined?
Depending if only quantities are shuffled OR ingredients plus quantities are shuffled, impact the final cost per ingrident.

When ingredients are the same but their cost is shuffled, the new cost will range between 50% to 125% of its original value. For example, the number of planks required for an Engine is 20. The new cost could be as low as 10 planks and as much as 30 planks. For another example, a Stone Axe requires 3 stones, so the new cost can be as low as 1 and as high as 4.

For shuffles that involve ingredients plus , the base cost of each ingredient is stored in `src\RandomizerIngredientsBaseCost.json`. The new cost will range between 50% to 125% of the value pulled from that file for its respective ingredient

# Features
 - Shuffling of ingredients and quantities for most of the Crafting Menu.
 - Shuffling of quantities for starting craft menu maintaining vanilla requirements.
 - Option to preview content before saving.
 - Save generated Json file

# Future

## In Progress
 - Basic Tier/Sphere based progress on how the game normal flows.
## Update Existing
 - Additional items/materials (controlled via a toggle)
   - Flowers
   - Fruits
   - Seeds
   - Vegetables (and cooked variants)
   - Fish (and cooked variants)
   - Honey
 - Randomization to include decorations with various configurations
## New Features
 - Add "Copy to Clipboard" (?)
 - UI component for variance and cost multiplier
 - General better UI experience
 - Cooking Mama - All crafting materials require food.