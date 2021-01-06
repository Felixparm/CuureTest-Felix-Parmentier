import Navigation from './navbar'
import React,{useEffect,useState} from 'react'
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle,Button,Col,Row
} from 'reactstrap';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

function ResultSearch(props) {

console.log('subcat from resultscreen',props.subcat)

  const[productList,setProductList]=useState([])
  const [goToProduct,setGoToProduct]=useState(false)

  useEffect(() => {
    const findProducts = async () => {
      const data = await fetch(`articles/filter-articles?subcat=${props.subcat}`)
      const body = await data.json()
      setProductList(body.products);

    }
    findProducts()
  },[])

console.log('from resultscreen',productList);

let searchProduct= productList.map((e,i)=>{
return (<Col xs="12" lg="6" xl="4">
    <Card>
      <CardImg top width="100%" src={e.images} alt="Card image cap" />
      <CardBody>
<CardTitle tag="h5">{e.title}</CardTitle>
<CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}</CardSubtitle>
<CardText>{e.description}</CardText>
        <Button onClick={() => {setGoToProduct(true);props.onSubmitproduct(e)}}>Voir l'article</Button>
      </CardBody>
    </Card>
  </Col>)})

if(goToProduct==true){
  return <Redirect to='/produit'/>
}
  return (
<div>
    <Navigation/>
    <h1>Résultats de votre recherche</h1>
   <Row>
      {searchProduct}
  </Row>
</div>
  );
}


function mapStateToProps(state) {
  return {subcat:state.subcat}
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmitproduct: function (product) {
      dispatch({ type: 'productSelectedFromResultScreen', product: product })
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )
  (ResultSearch)