import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lemonade from './lemonade pic.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { render } from '@testing-library/react';
import {useLocation, Link, Route, Routes} from 'react-router-dom';
/* local data*/
import recipes from '../data/recipesDB';

function SubRecipe() {
  
  const location = useLocation();
  const state = location.state;

  let subrecipe = recipes.find(item => item.id === state.id);

  return (
    <div>
      <div class="pageHeader">
        <Container>
          <h1>{subrecipe.name}</h1>
          <h6>Live Laugh Love</h6>
        </Container>
      </div>
      <Container className='aboutPageContainer'>
      <Row xs={1} md={2}>
          <Col className='aboutPageCol'>
            <h2>hello world!</h2>
          </Col>
          <Col>
            <Card className='homePageRecipeCard'>
                <Card.Img className='aboutPageImg' variant="top" src={subrecipe.pic}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SubRecipe;