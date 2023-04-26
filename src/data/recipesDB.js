import lemonade from '../images/lemonade pic copy.jpg';
import pasta from '../images/vodka sauce pasta copy.jpg';
import greenpasta from '../images/avocado pesto pasta pic copy.jpg';
import strawberryCroffle from '../images/strawberryCroffle.jpg';
import matchaCookie from '../images/matchacookies.jpeg';
import { cleanup } from '@testing-library/react';

const recipes = [
  {
    id: "1",
    name: "Blueberry Lavender Lemonade",
    description: "Tastes like summer evenings, playing cards under the shade",
    recipeYield: "1 bottle",
    pic: lemonade,
    ingredients: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "4",
        "name": "lemons"
      },
      {
        "quantity": "2 1/2 cup",
        "name": "water"
      }
    ],
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
    pic: pasta,
    ingredients: [
      {
        "quantity": "1/4 of a",
        "name": "onion"
      },
      {
        "quantity": "5-7 cloves",
        "name": "garlic"
      },
      {
        "quantity": "1/4 cup",
        "name": "tomato paste"
      },
      {
        "quantity": "1 cup",
        "name": "heavy cream"
      },
      {
        "quantity": "1/2 of a",
        "name": "lime"
      },
      {
        "quantity": "1/4 stick",
        "name": "butter"
      },
      {
        "quantity": "1/4 cup",
        "name": "parmesan cheese"
      },
      {
        "quantity": "1 teaspoon",
        "name": "salt"
      },
      {
        "quantity": "1 teaspoon",
        "name": "black pepper"
      },
      {
        "quantity": "1 teaspoon",
        "name": "red pepper flakes"
      },
      {
        "quantity": "1/2 cup",
        "name": "pasta water"
      },
      {
        "quantity": "Half bag",
        "name": "penne pasta"
      }
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
    pic: greenpasta,
    ingredients: [
      {
        "quantity": "1",
        "name": "avocado"
      },
      {
        "quantity": "1",
        "name": "lime"
      },
      {
        "quantity": "2-3 handful",
        "name": "basil"
      },
      {
        "quantity": "5-7 cloves",
        "name": "garlic"
      },
      {
        "quantity": "1 cup",
        "name": "parmesan cheese"
      },
      {
        "quantity": "1/8 cup",
        "name": "olive oil"
      },
      {
        "quantity": "1/8 cup",
        "name": "spicy honey"
      },
      {
        "quantity": "1 tablespoon",
        "name": "crushed red pepper"
      },
      {
        "quantity": "1/2 teaspoon",
        "name": "salt"
      },
      {
        "quantity": "1/2 cup",
        "name": "pasta water (as needed)"
      },
      {
        "quantity": "Half bag",
        "name": "penne"
      }
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
    pic: matchaCookie,
    ingredients: [
      {
        "quantity": "1 & 1/4 cup",
        "name": "all-purpose flour"
      },
      {
        "quantity": "1/2 teaspoon",
        "name": "baking soda"
      },
      {
        "quantity": "1/4 teaspoon",
        "name": "salt"
      },
      {
        "quantity": "1-2 teaspoon",
        "name": "matcha powder"
      },
      {
        "quantity": "1 stick (1/2 cup)",
        "name": "unsalted butter"
      },
      {
        "quantity": "1",
        "name": "egg"
      },
      {
        "quantity": "1/2 cup",
        "name": "brown sugar"
      },
      {
        "quantity": "1/4 cup",
        "name": "white sugar"
      },
      {
        "quantity": "1/4 teaspoon",
        "name": "vanilla extract"
      },
      {
        "quantity": "1",
        "name": "white chocolate bar"
      }
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
    pic: strawberryCroffle,
    ingredients: [
      {
        "quantity": "2-3",
        "name": "frozen mini croissants"
      },
      {
        "quantity": "3-4",
        "name": "strawberries, sliced"
      },
      {
        "quantity": "1 cup",
        "name": "heavy whipping cream, cold"
      },
      {
        "quantity": "2 tablespoon",
        "name": "white sugar"
      },
      {
        "quantity": "1/2 teaspoon",
        "name": "vanilla extract"
      },
      {
        "quantity": "1 tsp",
        "name": "powdered sugar"
      }
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
