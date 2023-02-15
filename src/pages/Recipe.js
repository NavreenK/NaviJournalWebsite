import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
/* local data*/
import recipes from '../data/recipesDB';

function Recipe() {
    return (
    <div >
    <div class="pageHeader">
        <Container>
            <h1>Recipes</h1>
            <h6>Novice, but confident cook equals some good eats</h6>
        </Container>
    </div>
      <Container className='recipeLPContainer'>
        <Row xs={1} md={2}>
            {recipes.map((e) => (
                <Col className='recipeCol'>
                    <Card>
                    <Card.Img className='recipePageRecipeCardImg' variant="top" src={e.pic}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>{e.name}</Card.Title>
                    <Card.Text>Some quick example text to build on the card title and make up the
                    bulk of the card's content.</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
      </Container>
    </div>
  )
}

export default Recipe;