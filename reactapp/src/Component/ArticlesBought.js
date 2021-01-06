
import React,{useEffect,useState} from 'react'
import Navigation from './navbar'
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle,Button,Col,Row
} from 'reactstrap';
import { connect } from 'react-redux';

function ArticlesBought(props) {

  const[productList,setProductList]=useState([])
  useEffect(() => {

    const findProducts = async () => {

      const data = await fetch(`/articles/get-article-by-buyer?buyerToken=${props.token}`)
      const body = await data.json()

      setProductList(body.articlesTab);
    }

    findProducts()

  }, [])



  let articleBought= productList.map((e,i)=>{
    return (<Col xs="12" lg="6" xl="4">
        <Card>
          <CardImg top width="100%" src={e.images} alt="Card image cap" />
          <CardBody>
    <CardTitle tag="h5">{e.title}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}€</CardSubtitle>
    <CardText>{e.description}</CardText>
            <Button>Voir l'article</Button>
          </CardBody>
        </Card>
      </Col>)}) 
  return (
<div>
    <Navigation/>
    <h1>Articles achetés</h1>
   <Row>
      {articleBought}
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
  (ArticlesBought)