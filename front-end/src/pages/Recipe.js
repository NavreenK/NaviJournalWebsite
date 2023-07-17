import './../App.css';
/* functionality imports*/
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
/** Sub Recipe Routing */
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Recipe({data}) {

    console.log(data);

    let recipes = data;
    let [page, setPage] = useState(1);
    const perPage = 4;
    let totalPages = Math.ceil(recipes.length/perPage);
    const initData = recipes.slice(0,perPage);
    //console.log(recipes);
    const [recipeData, setRecipeData] = useState(initData);
    const handleChange = (e, p) => {
      setPage(p);
      let end = perPage*p;
      let start = (end-4);
      setRecipeData(recipes.slice(start,end));
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
            {recipeData.map((e) => (
                <Col className='recipeCol'>
                    <Card href="#">
                    <Card.Img className='recipePageRecipeCardImg' variant="top" src={require(`../images/${e.image}`)}/>
                    <Card.Body>
                    <Card.Title className='recipeCardTitle'>{e.name}</Card.Title>
                    </Card.Body>
                    <Button className='recipeButton' as={Link} to={`/subrecipe?id=${e._id}`} state={{id: e._id}}>Read More</Button>{' '}
                    </Card>
                </Col>
            ))}
        </Row>
        <Pagination className='recipePagination pagination' page={page} count={totalPages} shape="rounded"
        onChange={handleChange}
        sx={{'.Mui-selected': {backgroundColor: '#3C422E !important',color: '#F5F3E2'}}}>
        </Pagination>
      </Container>
    </div>
  )
}

export default Recipe;