import './../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import lemonade from './lemonade pic.jpg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { render } from '@testing-library/react';

function AboutMe() {
  const footerCss = " @media (min-width: 2000px) {.footer { position: absolute;}}"; 
  return (
    <div>
      <style>{footerCss}</style>
      <div class="pageHeader">
        <Container>
          <h1>About Me</h1>
          <h6>Live Laugh Love</h6>
        </Container>
      </div>
      <Container className='aboutPageContainer'>
      <Row xs={1} md={2}>
          <Col className='aboutPageCol'>
            <h2>hello world!</h2>
            <h5>my name is navi. i am a software engineer by day, devastatingly gorgeous creative by night.</h5>
            <h5>welcome to my fun project where i share things i have been cooking and all the fun i have.</h5>
            <h5>enjoy!</h5>
          </Col>
          <Col>
            <Card className='homePageRecipeCard'>
                <Card.Img className='aboutPageImg' variant="top" src={lemonade}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;