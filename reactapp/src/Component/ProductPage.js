import React,{useEffect,useState} from 'react'
import {
  Card, CardText, CardBody, CardImg,
  CardTitle, CardSubtitle,Button,Col,Row,
  Modal, ModalHeader, ModalBody, ModalFooter,
  Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function ProductPage(props) {

// Variable crée pour récupérer l'ensemble des produits en vente en BDD
const[productList,setProductList]=useState([])

// Variables utilisées pour gérer la pagination
const[allPages,setAllPages]=useState([]);

// Variables utilisées pour gérer la fenêtre popup donnant accés à la description du produit
const[pageSelected,setPageSelected]=useState(1)
const {
    buttonLabel,
    className
  } = props;

const [modal, setModal] = useState(false);
const toggle = () => setModal(!modal);
const[elementSelected,setElementSelected]=useState({})

// Au chargement du composant, on récupére l'ensemble des artciles en ventes présents dans la BDD 
// On calucle le nombre de pages nécéssaires pour la pagination (ici on choisit une limite de 6 articles par page)

  useEffect(() => {
      const findProducts = async () => {
      const data = await fetch(`/articles/get-all-articles`)
      const body = await data.json()
      setProductList(body.products);
      var arrayOfPage=[];
      for(var i=0;i<body.products.length;i++){ 
        if(i%6===0 || i===body.products.length-1){
          arrayOfPage.push(arrayOfPage.length+1)
        }
      }
      setAllPages(arrayOfPage);
    }
    findProducts()
  },[])
console.log('refresh component')
// Mise en frome de l'ensemble des informations des articles récupéreés de la BDD sous frome de carte 
// Les artciles s'afficheront suivant la page sélectionnées par l'utilisateur

let allCardProduct= productList.map((e,i)=>{

  if(i>=(pageSelected-1)*6 && i<pageSelected*6){ 
    console.log('insideMap',pageSelected) 
    console.log(i);
return (
  
<Col xs="12" lg="6" xl="4">
    <Card>
      <CardImg top width="100%" src={e.images} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{e.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{e.price}€</CardSubtitle>
        <CardText>{e.subcategory}</CardText>
        <Button onClick={() => {setElementSelected(e);toggle() }}  style={{backgroundColor:'#65378a'}}>Voir la description</Button>
        <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
               toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Brand: {elementSelected.brand}</ModalHeader>
            <ModalBody>
               {elementSelected.description}
            </ModalBody>
            <ModalFooter>
               <Button style={{backgroundColor:'#65378a'}} onClick={toggle}>Buy : {elementSelected.price}€</Button>{' '}
               <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </CardBody>
    </Card>
</Col>
  )}})
// Mise en place de la barre de pagination 
var pagination= allPages.map((e,j)=>{ 
    return(
       <PaginationItem onClick={() => setPageSelected(e)}>
         <PaginationLink>
           {e}
         </PaginationLink>
       </PaginationItem> )
     })

return (
<div>
  <div id='HomeScreen'>
{/* Mise en place de l'affichage de la pagination */}

   <Pagination aria-label="Page navigation example">
      <PaginationItem onClick={() => setPageSelected(1)}>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem onClick={() => setPageSelected(pageSelected-1)} >
        <PaginationLink previous href="#"/>
      </PaginationItem>
      {pagination}
      <PaginationItem onClick={() => setPageSelected(pageSelected+1)}>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem onClick={() => setPageSelected(allPages.length)}>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>

{/* Mise en place de l'affichage des articles sous forme de card */}
    <Row>
      {allCardProduct}
    </Row>

  </div>
</div>
  );
}

export default ProductPage