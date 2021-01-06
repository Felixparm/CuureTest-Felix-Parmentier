import React , {useState} from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,Col
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
    <Col xs="12" lg="6" xl="4">
    <CardDeck>
      <Card>
        <CardImg top width="100px" src={props.product.images} alt="Card image cap" />
        <CardBody>
  <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{props.product.category}/{props.product.subcategory}</CardSubtitle>
          <CardText>Marque: {props.product.brand}</CardText>
          <CardText>Etat: {props.product.state}</CardText>
          <CardText>Description {props.product.description}</CardText>
          <Button onClick={() => {setGoToProduct(true)}} style={{backgroundColor:'#65378a'}}>Acheter ({props.product.price}€)</Button>
        </CardBody>
      </Card>
      </CardDeck>
      </Col>
     
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