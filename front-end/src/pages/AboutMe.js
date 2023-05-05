import './../App.css';
/* functionality imports*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
/* image import */
import aboutme from '../images/aboutme.jpeg';
/* testing library import */
import { render } from '@testing-library/react';

function AboutMe() {
  const footerCss = " @media (min-width: 2000px) {.footer { position: absolute;}}"; 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <style>{footerCss}</style>
      <div className="pageHeader">
        <Container>
          <h1>About Me</h1>
          <h6>Live Laugh Love</h6>
        </Container>
      </div>
      <Container className='aboutPageContainer'>
      <Row xs={1} md={2}>
          <Col className='aboutPageCol'>
            <h2>hello world!</h2>
            <p>my name is navi. i am a software engineer.
              this project was created for me to practice my web-development skills and pick up on react.js. 
              I also use React bootstrap and Material UI on this project. 
              This project is a work-in-progress so please feel free to let me know how I can improve. 
            </p>
            <h5>enjoy!</h5>
          </Col>
          <Col>
            <Card id='homePageRecipeCard'>
                <Card.Img className='aboutPageImg' variant="top" src={aboutme}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;