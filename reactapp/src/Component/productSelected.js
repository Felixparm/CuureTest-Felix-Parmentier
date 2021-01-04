import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Navigation from './navbar'

export default function Product (props) {

  return (
    <div>

    <Navigation/>
    
    <CardDeck>
      <Card>
        <CardImg top width="400px" src="../logo192.png" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Acheter</Button>
        </CardBody>
      </Card>
      </CardDeck> 
      </div>
      )
      }