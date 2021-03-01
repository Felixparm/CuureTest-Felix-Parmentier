import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import { Col,Form, FormGroup, Label, Input, Button,Row } from 'reactstrap';
import '../App.css';

function SigninScreens() {

  const [signInEmail, setSignInEmail] = useState('')
  const [signInPassword, setSignInPassword] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [name,setName]=useState('');
  const [address,setAddress]=useState('')
  const [city,setCity]=useState('');
  const [postalCode,setPostalCode]=useState('')
  const [isConnect, setIsConnect] = useState(false)
  const [isNotConnectSignIn, setIsNotConnectSignIn] = useState('')
  const [isNotConnectSignUp, setIsNotConnectSignUp] = useState('')

// Au clic sur 'se connecter' , j'envoie au backend mon mot de passe et mon email, si ils sont valides alors le
// backend m'envoit en retour une autorisation (result==true) qui me peremttra d etre redirigé vers la page d'accueil

  var handleClickSignIn = async () => {

    const dataUsers = await fetch(`/users/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `email=${signInEmail}&password=${signInPassword}`
    },
    );
    const dataConsumers = await dataUsers.json()
    setIsConnect(dataConsumers.result)
    setIsNotConnectSignIn(dataConsumers.error)
  }
 
// Au clic sur 'se créer un compte' , j'envoie au backend l'ensemble des informations liées à la création de mon compte. Si cette inscription est valide
// mon compte sera alors enregistré en BDD
// Le backend m'envoit en retour une autorisation (result==true) qui me peremttra d etre redirigé vers la page d'accueil

  var handleClickSignUp = async () => {

    const dataUsers = await fetch(`/users/sign-up`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `firstName=${name}&email=${signUpEmail}&password=${signUpPassword}&address=${address}&postalCode=${postalCode}&city=${city}`
    });
    const dataConsumers = await dataUsers.json()
    setIsConnect(dataConsumers.result)
    setIsNotConnectSignUp(dataConsumers.error)
  }

if(isConnect==true){
  return <Redirect to='Product'/>
}
  return (
  <div id='backgroudSignInUp'>
{/*----------------- Partie Sign In ----------------*/}
    <div id='signInUp'>  
      <Row>
        <Col xs='12' md='6'>
           <h3 className='titleSignInUp'>Connexion</h3>

           <Form>
             <FormGroup row>
               <Label for="exampleEmail" sm={6} className='nameInputsignInUp'>Email</Label>
                <Col sm={12}>
                   <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
                          onChange={(e) => setSignInEmail(e.target.value)}
                          value={signInEmail}
                    />
                </Col>
              </FormGroup>
              <FormGroup row>
               <Label for="examplePassword" sm={6} className='nameInputsignInUp'>Mot de passe</Label>
               <Col sm={12}>
                   <Input type="password" name="password" id="examplePassword" placeholder="Mot de passe"
                           onChange={(e) => setSignInPassword(e.target.value)}
                           value={signInPassword}
                    />
               </Col>
              </FormGroup>
            </Form> 
            <Button 
                 onClick={() => { handleClickSignIn() }}
                 className='buttonSignInUp'
                 style={{backgroundColor:'#65378a'}}>
                 Me connecter
            </Button>
                <p>{isNotConnectSignIn}</p>
        </Col> 
{/*-------------------- Partie Sign Up -------------------*/}
        <Col xs='12' md='6'>
           <h3 className='titleSignInUp'>Création de compte</h3>
           
           <Form>
            <FormGroup row>
               <Label  sm={6} className='nameInputsignInUp'>Nom</Label>
               <Col sm={12}>
                  <Input type="name" name="name"  placeholder="Nom" 
                    onChange={(e) => setName(e.target.value)} 
                    value={name}
                  />
              </Col>
            </FormGroup>
            <FormGroup row> 
                <Label for="exampleEmail" sm={2} className='nameInputsignInUp'>Email</Label>
                <Col sm={12}>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Email" 
                     onChange={(e) => setSignUpEmail(e.target.value)} 
                     value={signUpEmail}
                  />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="examplePassword" sm={6} className='nameInputsignInUp'>Mot de passe</Label>
                <Col sm={12}>
                   <Input type="password" name="password" id="examplePassword" placeholder="mot de passe"
                      onChange={(e) => setSignUpPassword(e.target.value)}
                      value={signUpPassword}
                   />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label  sm={6} className='nameInputsignInUp'>Adresse</Label>
                <Col sm={12}>
                    <Input type="Address" name="Address"  placeholder="56 Boulevard Pereire"
                       onChange={(e) => setAddress(e.target.value)}
                       value={address}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
               <Label  sm={6} className='nameInputsignInUp'>Ville</Label>
               <Col sm={12}>
                    <Input type="City" name="City"  placeholder="Paris"
                       onChange={(e) => setCity(e.target.value)}
                       value={city}
                    />
               </Col>
            </FormGroup>
            <FormGroup row>
               <Label  sm={6} className='nameInputsignInUp' >Code postal</Label>
               <Col sm={12}>
                    <Input type="codepostal" name="codepostal"  placeholder="75017"
                       onChange={(e) => setPostalCode(e.target.value)} 
                       value={postalCode}
                    />
               </Col>
            </FormGroup>
           </Form>

           <Button
              className='buttonSignInUp'
              onClick={() => { handleClickSignUp() }}
              style={{backgroundColor:'#65378a'}}>
              Créer un compte
           </Button>
           <p>{isNotConnectSignUp}</p>
        </Col>
       </Row>
    </div>
  </div>
  )
}


export default SigninScreens

