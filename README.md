# What is Raftdomizer?

In its current state, Raftdomizer allows for the user to load a file generated from https://raftdomizer.github.io/recipe-randomizer. The file generated, `RecipeOverride.json`, shuffles the resources, materials and/or quantities for each item in the crafting menu. Currently it is limited to anything in the crafting menu except for food based items (see 'Future' section). Once the file is generated, it should be placed in `mods\ModData\RecipeRandomizer` folder (feel free to create this folder if it does not exist). When the mod is loaded it will read the contents of the generated file and update the in-game recipes with what is in the `RecipeOverride.json` file. It is recommended that a fresh world is used for this. With that said, the user is free to use an existing world and/or modify the json file to meet their needs.
# So it is not truely random?
The short answer is no. If anything it is a glorified Crafting Menu adjuster with the added bonus of randomizing recipes. As such if the user finds that the crafting items are either too generous or difficult, they can be adjusted. In a future state, I would like to store this information in game and then allow the user to override it if they like.

# Will this work with other mods?
Depends on what other mods it is loaded with. This mod does override a number of the vanilla recipes so any other mods that perform that operation may yield varying results.

# How are the random quantities for each crafted item determined?
When shuffling only cost, the new cost can either be 50% to 125% of its original cost with a minimum cost of 1 rounded down. For example, the number of planks required for an Engine is 20. The new cost could be as low as 10 planks and as much as 30 planks. For another example, a Stone Axe requires 3 stones, so the new cost can be as low as 1 and as high as 4.

For shuffle ingredients and cost, the baseline cost can be found in `src\RandomizedIngredientsBaseCost.json`. The cost of each ingredient is adjusted between 50% to 125% of cost listed in the json file.

# Features
 - Shuffling of ingredients and quantities for most of the Crafting Menu.
 - Shuffling of quantities for starting craft menu maintaining vanilla requirements.

# Future
 - Tier/Sphere based progress to further randomization
 - Additional items/materials (controlled via a toggle)
   - Flowers
   - Fruits
   - Seeds
   - Vegetables (and cooked variants)
   - Fish (and cooked variants)
   - Honey
 - Allow Crafting Menu items to be used for other Crafting Menu items
 - Cooking Mama - All crafting materials require food.