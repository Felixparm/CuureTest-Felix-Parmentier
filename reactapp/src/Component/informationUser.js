import React,{useState,useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { connect } from 'react-redux';
import Navigation from './navbar'
import '../App.css';


function InformationUser(props){

  console.log(props.token)

  const[userInfo, setUserInfo]=useState('');
  // Au chargement du composant , on récupére l'ensemble des informations liées à l'utilisateur.
  // Cela est possible grâce au token de l'utilisateur (initialement stocké dans un reducer) que nous envoyons au backend
  useEffect(() => {
    const findUser = async () => {
      const rawData = await fetch(`users/display-profile?token=${props.token}`)
      const doneData = await rawData.json()
      setUserInfo(doneData)

    }
    findUser()
  }, [])
 console.log(userInfo)

 // Mise en frome des informations recues sous forme de liste
  return (
    <div>
    <Navigation/>
    <div id='information'>
    <ListGroup>

  <ListGroupItem>{userInfo.email}</ListGroupItem>
  <ListGroupItem>{userInfo.address}</ListGroupItem>
  <ListGroupItem>{userInfo.city}</ListGroupItem>
  <ListGroupItem>{userInfo.postalCode}</ListGroupItem>
    
    </ListGroup>
    </div>
    </div>
  );

}


function mapStateToProps(state) {
  return {token:state.token}
}
export default connect(

  mapStateToProps,
  null
  
)(InformationUser);
