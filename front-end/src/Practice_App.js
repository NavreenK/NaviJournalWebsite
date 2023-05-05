import './App.css';
import NavBar from './NavBar.js';
import React, { useState } from 'react';

function Btn(props) {
  //const clickHandler = () => console.log("ello there");
    let darkMode = false;
    let darkModeText = <h1>DARK MODE IS ON</h1>
    let lightModeText = <h1>LIGHT MODE IS ON</h1>

    function clickHandler() {
      darkMode = !darkMode;
    }
    return (
      <div>
        {darkMode ? darkModeText : lightModeText}
      <button onClick={clickHandler}>Click me</button>
      </div>
    );
}

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

/*const foodOrder = foodData.map( item => { 
  const foodItem = `${item.name}`;
  return <li> {foodItem}</li>
});*/
function App() {
  //local state for input
  const [inputVal, setInputVal] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const handleSubmit = (e) => {
    console.log('form submit');
    setInputVal("");
    e.preventDefault();

  };

  const [fruits, useFruits] = useState("Lemon");
  return (
      <div>
        {fruits}
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="name">Label</label>
            <input 
            id="name"
            type="text" 
            value={inputVal} 
            onChange={(e)=> setInputVal(e.target.value)}></input>
          <button disabled={!inputVal} type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
  );
}

export default App;
