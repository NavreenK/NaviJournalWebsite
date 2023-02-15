import './App.css';
import NavBar from './NavBar.js';
import React, { useState } from 'react';

const foodData = [
  {
    id: "1",
    name: "Ramen",
    description: "noodles, broth, and eggs",
    price: "$5.99"
  },
  {
    id: "1",
    name: "Tomato Soup",
    description: "tomato, onion, and cream",
    price: "$5.99"
  },
  {
    id: "1",
    name: "Truffle Fries",
    description: "fried in truffle oil with aioli on the side",
    price: "$5.99"
  }
];

function App() {
  return (
    <>
      <NavBar></NavBar>
    </>
  );
}

export default App;
