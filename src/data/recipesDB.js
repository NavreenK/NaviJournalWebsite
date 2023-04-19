import lemonade from '../pages/lemonade pic copy.jpg';
import pasta from '../pages/vodka sauce pasta copy.jpg';
import greenpasta from '../pages/avocado pesto pasta pic copy.jpg';
import { cleanup } from '@testing-library/react';

const recipes = [
  {
    id: "1",
    name: "Blueberry Lavender Lemonade",
    description: "Tastes like summer evenings, playing cards under the shade",
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
    ingredients2Header: "For the simple syrup",
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
        "quantity": "2 tbsp",
        "name": "lavender"
      }
    ],
    instructions: ["For the blueberry lavender syrup, combine the blueberries, ", "do something 2", "do something 3"]
  },
  {
    id: "2",
    name: "Vodka Sauce Pasta",
    description: "Pretending to be off a coast in Italy has never been more possible",
    pic: pasta,
    ingredients: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "1 cup",
        "name": "water"
      },
      {
        "quantity": "4",
        "name": "lemons"
      },
      {
        "quantity": "2 1/2 cup",
        "name": "water"
      },
      {
        "quantity": "1/4 cup",
        "name": "blueberries"
      },
      {
        "quantity": "2 tbsp",
        "name": "lavender"
      }
    ],
    instructions: ["do something", "do something 2", "do something 3"]
  },
  {
    id: "3",
    name: "Avocado Pesto Pasta",
    description: "Eat your greens",
    pic: greenpasta,
    ingredients: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "1 cup",
        "name": "water"
      },
      {
        "quantity": "4",
        "name": "lemons"
      },
      {
        "quantity": "2 1/2 cup",
        "name": "water"
      },
      {
        "quantity": "1/4 cup",
        "name": "blueberries"
      },
      {
        "quantity": "2 tbsp",
        "name": "lavender"
      }
    ],
    instructions: ["do something", "do something 2", "do something 3"]
  },
  {
    id: "4",
    name: "Strawberry Vanilla Cake",
    description: "Summer has never looked better",
    pic: lemonade,
    ingredients: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "1 cup",
        "name": "water"
      },
      {
        "quantity": "4",
        "name": "lemons"
      },
      {
        "quantity": "2 1/2 cup",
        "name": "water"
      },
      {
        "quantity": "1/4 cup",
        "name": "blueberries"
      },
      {
        "quantity": "2 tbsp",
        "name": "lavender"
      }
    ],
    instructions: ["do something", "do something 2", "do something 3"]
  },
  {
    id: "5",
    name: "Strawberry Vanilla Cake",
    description: "Summer has never looked better",
    pic: lemonade,
    ingredients: [
      {
        "quantity": "1 cup",
        "name": "sugar"
      },
      {
        "quantity": "1 cup",
        "name": "water"
      },
      {
        "quantity": "4",
        "name": "lemons"
      },
      {
        "quantity": "2 1/2 cup",
        "name": "water"
      },
      {
        "quantity": "1/4 cup",
        "name": "blueberries"
      },
      {
        "quantity": "2 tbsp",
        "name": "lavender"
      }
    ],
    instructions: ["do something", "do something 2", "do something 3"]
  }
];

export default recipes;
