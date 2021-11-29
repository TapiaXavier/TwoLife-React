import React from 'react';
<<<<<<< HEAD
=======
import {Link} from 'react-router-dom'
>>>>>>> f82698c4fdf9b9888231d105eb1233a518cf3be9
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AdCard = ({gameData})=>{

    return(
      <Col>
          <Card style={{ width: '12rem' }} className= "h-100">
          <Card.Img variant="top" src={gameData.img} /*style={{height: '100%'}}*//>
          <Card.Body /*className= "h-100"*/>
            <Card.Title>{gameData.name}</Card.Title>
            <Card.Text>
              ${gameData.price}
            </Card.Text>
            {/*<Button variant="primary">Más Información</Button>*/}
          </Card.Body>
          <Card.Footer>
            <Link to={`/compras/${gameData.id}`}>
            <Button variant="primary">Más Información</Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>

    );

};

export default AdCard;