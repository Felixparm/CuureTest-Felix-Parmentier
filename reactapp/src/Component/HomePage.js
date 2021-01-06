import React,{useEffect,useState} from 'react'
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle,Button,Col,Row
} from 'reactstrap';
import {Redirect} from 'react-router-dom'
import Navigation from './navbar'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function HomePage({onSubmitproduct}) {

const[productList,setProductList]=useState([])
const[goToProduct,setGoToProduct]=useState(false)

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`/articles/get-all-articles`)
      const body = await data.json()
      setProductList(body.products);
    }
    findProducts()
  },[])

console.log(productList);

let allCardProduct= productList.map((e,i)=>{
return (<Col xs="12" lg="6" xl="4">
    <Card>
      <CardImg top width="100%" src={e.images} alt="Card image cap" />
      <CardBody>
<CardTitle tag="h5">{e.title}</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}€</CardSubtitle>
<CardText>{e.subcategory}</CardText>
         <Button onClick={() => {setGoToProduct(true);onSubmitproduct(e)}}  style={{backgroundColor:'#65378a'}}>Voir l'article</Button> 
      </CardBody>
    </Card>
  </Col>)})

if(goToProduct==true){
  return <Redirect to='/produit'/>
}

  return (
<div>
    <Navigation/>
  <div id='HomeScreen'>
   <Row>
 
      {allCardProduct}
     
  </Row>
  </div>
</div>
  );
}


function mapDispatchToProps(dispatch) {
  return {
    onSubmitproduct: function (product) {
      dispatch({ type: 'productSelectedFromHomeScreen', product: product })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
  )
  (HomePage)