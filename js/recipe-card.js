class Recipe {
    constructor(title, serves, ingredients) {
        this.title = title;
        this.serves = serves;
        this.ingredients = ingredients;
    }

    logRecipe = function() {
        console.log(`${this.title}`);
        console.log(`Serves: ${this.serves}`);
        console.log(`Ingredients:`);
        for (let i = 0; i < this.ingredients.length; i++) {
        console.log(`- ${this.ingredients[i]}`);
        }
    }
}

const favRecipe = new Recipe('Guacamole', 4, [["3 Avocados"], ["1 Lime"], ["1 Teaspoon Salt"], ["1/2 Cup Onion"], ["3 Tablespoons Cilantro"], ["2 Diced Tomatoes"], ["1 Teaspoon Garlic"], ["1 Pinch Ground Pepper"]]);
favRecipe.logRecipe();