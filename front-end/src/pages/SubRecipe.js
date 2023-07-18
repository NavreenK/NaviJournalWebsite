import './../App.css';
/* functionality imports*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from "react";
/* testing library import */
import { render } from '@testing-library/react';

function SubRecipe({data}) {
  
  const location = useLocation();
  let navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search)
  //console.log(data)
  //console.log(searchParams.get('id'))
  let subrecipe = data.find(item => item._id === searchParams.get('id'));
  //console.log(subrecipe)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if(!subrecipe){
    return navigate("*");
  }
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
                <Card.Img className='subRecipeImg' width="5000px" variant="top" src={require(`../images/${subrecipe.image}`)}/>
            </Card>
            <h4 id="subRecipeYield">Serves: {subrecipe.recipeYield}</h4>
          </Col>
          <Col className='subRecipeCol subRecipeIngredientCol'>
            <h3 id='subRecipeIngredientHeader'>Ingredients</h3>
            {subrecipe.ingredients.map((e) => (
              <ul><li id="ingredientLists">{e}</li></ul>
            ))}
            {subrecipe.ingredients2 && <h6 id="subRecipeIngredientHeader">{subrecipe.ingredients2Header}</h6>}
            {subrecipe.ingredients2 && subrecipe.ingredients2.map((e) => (
              <ul><li id="ingredientLists">{e}</li></ul>
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