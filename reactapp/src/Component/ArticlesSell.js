
import Navigation from './navbar'
import React,{useEffect,useState} from 'react'
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle,Button,Col,Row
} from 'reactstrap';
import { connect } from 'react-redux';

function ArticlesSell({token}) {

  const[productList,setProductList]=useState([])

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`articles/get-article-by-seller?SellerToken=${token}`)
      const body = await data.json()
      setProductList(body.products);
    }
    findProducts()
  },[])

console.log(productList);

let sellProduct= productList.map((e,i)=>{
return (<Col xs="12" lg="6" xl="4">
    <Card>
      <CardImg top width="100%" src={e.images} alt="Card image cap" />
      <CardBody>
<CardTitle tag="h5">{e.title}</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}€</CardSubtitle>
<CardText>{e.description}</CardText>
        <Button style={{backgroundColor:'#65378a'}}>Voir l'article</Button>
      </CardBody>
    </Card>
  </Col>)})


  return (
<div>
    <Navigation/>
    <h1>Articles Vendus</h1>
   <Row>
      {sellProduct}
  </Row>
</div>
  );
}


function mapStateToProps(state) {
  return {token:state.token}
}

export default connect(
  mapStateToProps,
  null
  )
  (ArticlesSell)