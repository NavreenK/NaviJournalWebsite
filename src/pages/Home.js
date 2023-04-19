import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
/* images*/
import pasta from './vodka sauce pasta.jpg';
import greenpasta from './avocado pesto pasta pic.jpg';
import lemonade from './lemonade pic.jpg';

function Home() {
  return (
    <div>
    <div className="pageHeader">
      <Container>
        <h1>Adventures of Navi</h1>
        <h6>Food + Places + Navi in the wild</h6>
      </Container>
    </div>
    <Container className='homePageContainerTop'>
        <Row xs={1} md={1}>
          <Col>
          <Card className='homePageCard'>
            <Card.Body className='homePageCardBody'>
              <Card.Title>Welcome to my page</Card.Title>
              <Card.Text>
              Software engineer by day; constantly searching for another creative venture every night. Check out one of my featured recipies below or navigate to the recipe page to see my entire archive!
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
    </Container>
    <div className="pageMidSection">
      <Container>
        <h4>What is Navi's Cookbook?</h4>
        <h3>Check out one of my featured recipies below or navigate to the recipe page to see my entire archive!</h3>
      </Container>
    </div>
    <Container className='homePageContainer'>
      <Row xs={1} md={3}>
            <Col>
                <Card className='homePageRecipeCard'>
                    <Card.Img className='homePageRecipeCardImg' variant="top" src={pasta}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>Vodka Sauce Pasta</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='homePageRecipeCard'>
                    <Card.Img className='homePageRecipeCardImg' variant="top" src={lemonade}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>Blueberry Lavender Lemonade</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='homePageRecipeCard'>
                    <Card.Img className='homePageRecipeCardImg' variant="top" src={greenpasta}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>Avocado Pesto Pasta</Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default Home;