import React , {useState} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import Navigation from './navbar'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

function Product (props) {
console.log(props.product)
const [goToProduct,setGoToProduct]=useState(false)

if(goToProduct==true){
  return <Redirect to='/basket'/>
}

  return (
    <div>

    <Navigation/>
    
    <CardDeck>
      <Card>
        <CardImg top width="400px" src="../logo192.png" alt="Card image cap" />
        <CardBody>
  <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.product.subcategory}</CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <Button onClick={() => {setGoToProduct(true)}}>Acheter ({props.product.price}€)</Button>
        </CardBody>
      </Card>
      </CardDeck> 
      </div>
      )
      }

      function mapStateToProps(state) {
        return {product:state.product}
      }
      
      export default connect(
        mapStateToProps,
        null
        )
        (Product)