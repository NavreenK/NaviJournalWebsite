import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { render } from '@testing-library/react';
import {useLocation} from 'react-router-dom';
/* local data*/
import recipes from '../data/recipesDB';

function SubRecipe() {
  
  const location = useLocation();
  const state = location.state;

  let subrecipe = recipes.find(item => item.id === state.id);

  return (
    <div>
      <div className="pageHeader">
        <Container>
          <h1>{subrecipe.name}</h1>
          <h6>{subrecipe.description}</h6>
        </Container>
      </div>
      <Container className='aboutPageContainer'>
      <Row xs={1} md={1}>
          <Col className='subRecipeCol'>
            <Card className='subRecipeCard'>
                <Card.Img className='subRecipeImg' width="5000px" variant="top" src={subrecipe.pic}/>
            </Card>
            <h3>Serves: {subrecipe.recipeYield}</h3>
          </Col>
          <Col className='subRecipeCol subRecipeIngredientCol'>
            <h3 id='subRecipeIngredientHeader'>Ingredients</h3>
            {subrecipe.ingredients.map((e) => (
              <ul><li id="ingredientLists">{e.quantity} {e.name}</li></ul>
            ))}
            {subrecipe.ingredients2 && <h6 id="subRecipeIngredientHeader">{subrecipe.ingredients2Header}</h6>}
            {subrecipe.ingredients2 && subrecipe.ingredients2.map((e) => (
              <ul><li id="ingredientLists">{e.quantity} {e.name}</li></ul>
            ))}
          </Col>
          <Col className='subRecipeCol'>
            <h3 id='subRecipeIngredientHeader'>Instructions</h3>
            {subrecipe.instructions.map((e,index) => (
              <p>{index+1}. {e}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubRecipe;