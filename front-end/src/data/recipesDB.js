import lemonade from '../images/lemonade pic copy.jpg';
import pasta from '../images/vodka sauce pasta copy.jpg';
import greenpasta from '../images/avocado pesto pasta pic copy.jpg';
import strawberryCroffle from '../images/strawberryCroffle.jpg';
import matchaCookie from '../images/matchacookies.jpeg';
import { cleanup } from '@testing-library/react';

/* Use Google Dev documentation for Recipe to create recipe JSON object: https://developers.google.com/search/docs/appearance/structured-data/recipe */
const recipes = [
  {
    id: "1",
    name: "Blueberry Lavender Lemonade",
    description: "Tastes like summer evenings, playing cards under the shade",
    recipeYield: "1 bottle",
    image: lemonade,
    ingredients: ["1 cup sugar", "4 lemons", "2 1/2 cup water"],
    ingredients2Header: "For the blueberry, lavender simple syrup",
    ingredients2: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "1 cup",
        "name": "water"
      },
      {
        "quantity": "1/4 cup",
        "name": "blueberries"
      },
      {
        "quantity": "2 tablespoon",
        "name": "lavender"
      }
    ],
    instructions: ["For the blueberry lavender syrup, add all the ingredients in a sauce pan and cook on medium heat until it starts to bubble",
                  "Turn the heat down to low-medium heat and let it simmer for about 15-20 minutes", 
                  "Let it cool down before straining the syrup into a container",
                  "Use a citrus juicer to juice the lemons",
                  "Combine the lemon juice, blueberry-lavender simple syrup, sugar, and water in a bowl. Use a funnel to pour the juice into a bottle",
                  "If it is too sour, you can add more water and/or simple syrup. I usually have to alter it a little here and there based on my taste preferences"
                  ]
  },
  {
    id: "2",
    name: "Vodka Sauce Pasta",
    description: "Pretending to be off a coast in Italy has never been more possible",
    recipeYield: "2",
    image: pasta,
    ingredients: [ "1/4 of a onion", "5-7 cloves garlic", "1/4 cup tomato paste", "1 cup heavy cream", 
                   "1/2 of a lime", "1/4 stick butter", "1/4 cup parmesan cheese", "1 teaspoon salt",
                   "1 teaspoon black pepper", "1 teaspoon red pepper flakes", "1/2 cup pasta water",
                   "Half bag penne pasta"
    ],
    instructions: ["Cook the penne pasta in lightly salted water and save some pasta water for the sauce", 
                  "Dice the onions and garlic. Simmer in olive oil on medium heat", 
                  "Add tomato paste, lime, butter, parmesan cheese, and heavy cream. Keep stiring so it doesn't burn",
                  "Add black pepper and red pepper flakes to the sauce", 
                  "Add pasta water and taste for saltiness. Add salt as needed", 
                  "Grind up the sauce and add on top of the cooked pasta. Enjoy!"
                ]
  },
  {
    id: "3",
    name: "Avocado Pesto Pasta",
    description: "Eat your greens",
    recipeYield: "2",
    image: greenpasta,
    ingredients: [
      "1 avocado",
      "1 lime",
      "2-3 handful basil",
      "5-7 cloves garlic",
      "1 cup parmesan cheese",
      "1/8 cup olive oil",
      "1/8 cup spicy honey",
      "1/2 teaspoon salt",
      "1 tablespoon red pepper flakes",
      "1/2 cup pasta water (as needed)",
      "Half bag penne pasta"
    ],
    instructions: ["Cook the penne pasta as instructed on the box", 
                  "Add the avocado, lime, basil, garlic, parm cheese, olive oil, spicy honey, crushed red pepper, salt, and pasta water to a food processor", 
                  "Blend the ingredients together until it is a paste",
                  "Add on top of the cooked penne pasta and enjoy"]
  },
  {
    id: "4",
    name: "Matcha White Chocolate Chip Cookies",
    description: "Eat your greens",
    recipeYield: "6",
    image: matchaCookie,
    ingredients: [ 
        "1 & 1/4 cup all-purpose flour", "1/2 teaspoon baking soda", "1/4 teaspoon salt", "1-2 teaspoon matcha powder",
        "1 stick (1/2 cup) unsalted butter", "1 egg", "1/2 cup brown sugar", "1/4 cup white sugar",
        "1/4 teaspoon vanilla extract", "1 white chocolate bar"
    ],
    instructions: ["In a large bowl, whisk together the dry ingredients: flour, baking soda, salt, and matcha powder. Put aside", 
                  "In a pan over medium heat, melt the butter. Continue whisking the butter until it has browned", 
                  "Transfer the browned butter to a separate bowl. Add brown sugar and white sugar to the browned butter and mix together",
                  "Add in the egg and whisk together. Stir in the vanilla extract", 
                  "Mix the dry ingredients with the wet ingredients until fully combined", 
                  "Chop the white chocolate bar into chunks and fold into the dough",
                  "Let the dough chill for at least 1-2 hours in the fridge. 24 hours will give the best results", 
                  "Bake at 350 degrees Fahrenheit for 10-15 min. Let it cool before eating. Enjoy!"]
  },
  {
    id: "5",
    name: "Strawberry Croffles",
    description: "Summer has never looked better",
    recipeYield: "3",
    image: strawberryCroffle,
    ingredients: [
      "2-3 frozen mini croissants", "3-4 strawberries, sliced", "1 cup heavy whipping cream, cold",
      "2 tablespoon white sugar", "1/2 teaspoon vanilla extract","1 tsp powdered sugar"
    ],
    instructions: ["Let the frozen croissants defrost before baking", 
                  "In the meantime, slice the strawberries to use as a topping and put aside", 
                  "Combine the heavy whipping cream, sugar, and vanilla extract in a chilled bowl. Whisk until it thickens",
                  "Once the croissants have defrosted, place them into a mini waffle maker and bake until golden brown",
                  "Pipe or place the whip cream on top of the baked croissants. Add the sliced strawberries next",
                  "Lastly, sift powder sugar on top of the croissant. Enjoy!"]
  }
];

export default recipes;
