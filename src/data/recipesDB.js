import React, { useState } from 'react';
import lemonade from '../pages/lemonade pic copy.jpg';
import pasta from '../pages/vodka sauce pasta copy.jpg';
import greenpasta from '../pages/avocado pesto pasta pic copy.jpg';

const recipes = [
  {
    id: "1",
    name: "Blueberry Lavender Lemonade",
    pic: lemonade,
    ingredients: "noodles, broth, and eggs"
  },
  {
    id: "2",
    name: "Vodka Sauce Pasta",
    pic: pasta,
    ingredients: "blueberry, lemons"
  },
  {
    id: "3",
    name: "Avocado Pesto Pasta",
    pic: greenpasta,
    ingredients: "fried in truffle oil with aioli on the side"
  },
  {
    id: "4",
    name: "Strawberry Vanilla Cake",
    pic: lemonade,
    ingredients: "fried in truffle oil with aioli on the side"
  }
];

export default recipes;
