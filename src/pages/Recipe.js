import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
/* local data*/
import recipes from '../data/recipesDB';
import { useState } from 'react';
/** Sub Recipe Routing */
import {Link, Route, Routes} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Recipe() {
    const pages = useState();

    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
    return (
    <div >
    <div className="pageHeader">
        <Container>
            <h1>Recipes</h1>
            <h6>Novice, but confident cook equals some good eats</h6>
        </Container>
    </div>
      <Container className='recipeLPContainer'>
        <Row xs={1} md={2}>
            {recipes.map((e) => (
                <Col className='recipeCol'>
                    <Card href="#">
                    <Card.Img className='recipePageRecipeCardImg' variant="top" src={e.pic}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>{e.name}</Card.Title>
                    <Card.Text>{e.description}</Card.Text>
                    </Card.Body>
                    <Button className='recipeButton' as={Link} to='/subrecipe' state={{id: e.id}}>Read More</Button>{' '}
                    </Card>
                </Col>
            ))}
        </Row>
        <Pagination className='recipePagination' size="sm">{items}</Pagination>
      </Container>
    </div>
  )
}

export default Recipe;