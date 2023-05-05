import './../App.css';
/* functionality imports*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect } from "react";
import {Link} from 'react-router-dom';
/* image import */
import aboutme from '../images/aboutme.jpeg';

function PageNotFound() {
  const footerCss = " @media (min-width: 2000px) {.footer { position: absolute;}}"; 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <style>{footerCss}</style>
      <div className="pageHeader">
        <Container>
          <h1>404</h1>
          <h6>Page Not Found</h6>
        </Container>
      </div>
      <Container className='aboutPageContainer'>
      <Row xs={1} md={2}>
          <Col className='aboutPageCol'>
            <h5>Sorry, we can't find the page you are looking for!</h5>
            <Link className='pageNotFoundLink' as={Link} to='/'>Go To Homepage</Link>{' '}
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

export default PageNotFound;