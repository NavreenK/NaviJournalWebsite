import './App.css';
import NavBar from './NavBar.js';
import React, { useState, useEffect} from "react";
import { getAllRecipes } from './services/getRecipes.js'

function App() {

  let [recip, setRecip] = useState([]);
  useEffect(() => {
    getAllRecipes()
    .then(getRecipe => {
      setRecip(getRecipe);
    });
  },[]);
  
  if(recip.length != 0){
  return (
    <>
       <NavBar data={recip}></NavBar>
    </>
  
  );
  }
}
export default App;
