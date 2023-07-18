import './App.css';
/* import pages for routing*/
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Recipe from './pages/Recipe';
import SubRecipe from './pages/SubRecipe';
import PageNotFound from './pages/404';
/* functionality imports*/
import {Link, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar({data}) {
  //console.log(data);
  return (
    <>
      <Navbar id="main-nav" bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to='/'>NAVI'S COOKBOOK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">Menu</Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button className="navbarButton" as={Link} to='/recipe' variant="outline-light">Recipes</Button>{' '}
              <Button className="navbarButton" as={Link} to='/aboutme' variant="outline-light">About</Button>{' '}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home data={data}/>} />
        <Route path="/recipe/" element={<Recipe data={data}/>} />
        <Route path="/aboutme" element={<AboutMe/>} />
        <Route path="/subrecipe" element={<SubRecipe data={data}/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Navbar className='footer' bg="dark" variant="dark" expand="lg">
        <Container className='footerContainer'>
        <Row xs={1} md={2}>
        <Navbar.Brand className='footerTitle' as={Link} to='/'>Cheers to having fun!</Navbar.Brand>
          <Col className='footerCol'>
            <h6>Navigate</h6>
            <Nav.Link as={Link} to='/recipe'>Recipes</Nav.Link>{' '}
            <Nav.Link as={Link} to='/aboutme'>About</Nav.Link>{' '}
          </Col>
          <Col className='footerCol'>
            <h6>Follow Me</h6>
            <Nav.Link href='https://github.com/NavreenK'>GitHub</Nav.Link>{' '}
            <Nav.Link href='https://www.linkedin.com/in/navreen-kaur-8b3098a3/'>LinkedIn</Nav.Link>{' '}
          </Col>
        </Row>
        <Row xs={1} md={1}>
          <Col className='footerCol'>
            <h6>© NK 2023</h6>
          </Col>
        </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;