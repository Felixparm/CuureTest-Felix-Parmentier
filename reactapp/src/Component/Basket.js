import React, {useState,useEffect} from 'react';
import { Table,Button } from 'reactstrap';
import Navigation from './navbar'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'

function Basket (props) {
    const [buyer, setBuyer] = useState({});
    const [firstName, setFirstName] = useState('')
    const [goToProduct,setGoToProduct]=useState(false)

    useEffect(() => {
        const findBuyer = async () => {
          const data = await fetch(`/users/get-user?UserToken=${props.token}`)
          const body = await data.json()
          setBuyer(body.data)
    
        }
    
        findBuyer();
    
      }, [])
      useEffect(() => {
        const findSeller = async () => {
          const data = await fetch(`/users/get-seller?SellerToken=${props.product.sellerToken}`)
          const body = await data.json()
          setFirstName(body.firstName)
         
           console.log(body)
        }
        findSeller();
    
      }, [])

      var handleClick = async () => {

        const dataOrder = await fetch(`/orders/validate-order`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `articleId=${props.product._id}&clientToken=${props.token}`
        });
    
        const dataAnnonce = await dataOrder.json()
    
      }
if(goToProduct==true){
  return <Redirect to='/Achete'/>
}


  return (

    <Table>
       <Navigation/>
      <tbody>
      <tr>
         
         <td></td>
         <td></td>
         
       </tr>
        <tr>
         
          <td>Article :{props.product.title}</td>
          
          
        </tr>
        <tr>
          
          <td>Nom du vendeur :{firstName}</td>
          
          
        </tr>
        <tr>
          
          <td>Prix :{props.product.price}€</td>
          
        </tr>
        <tr>
          
          <td>Votre adresse de livraison:{buyer.address},{buyer.city},{buyer.postalCode}</td>
          
        </tr>
        <tr>
          
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <Button onClick={() => {handleClick();setGoToProduct(true)}} style={{backgroundColor:'#65378a'}}>Valider ma commande</Button>
    </Table>
  );
}

function mapStateToProps(state) {
    return {product:state.product, token:state.token}
  }
  
  export default connect(
    mapStateToProps,
    null
    )
    (Basket)